"use client";

import type { Unit, StudentProgress } from "@/lib/types";
import { canAccessSection, getStudentSectionStatus } from "@/lib/progress";
import { CheckCircle2, Circle, HelpCircle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  unit: Unit;
  progress: StudentProgress;
  activeSectionId: string;
  onSelect: (id: string) => void;
  className?: string;
}

export function SectionSidebarContent({
  unit,
  progress,
  activeSectionId,
  onSelect,
}: Omit<Props, "className">) {
  return (
    <>
      <div className="px-2 mb-2">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-600">
          Sections
        </span>
      </div>

      <nav className="space-y-0.5">
        {unit.sections.map((section) => {
          const status = getStudentSectionStatus(progress, section.id);
          const isActive = section.id === activeSectionId;
          const accessible = canAccessSection(progress, section.id);

          return (
            <button
              key={section.id}
              type="button"
              disabled={!accessible}
              onClick={() => onSelect(section.id)}
              className={cn(
                "w-full flex items-start gap-2 px-2.5 py-2 rounded-lg text-left transition-colors",
                !accessible && "opacity-50 cursor-not-allowed",
                isActive
                  ? "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
                  : accessible
                    ? "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                    : "text-slate-400 dark:text-slate-600"
              )}
            >
              <StatusIcon status={status} locked={!accessible} active={isActive} />
              <div className="min-w-0 flex-1">
                <div
                  className={cn(
                    "text-sm font-medium leading-tight",
                    isActive
                      ? "text-blue-700 dark:text-blue-300"
                      : accessible
                        ? "text-slate-700 dark:text-slate-300"
                        : "text-slate-400 dark:text-slate-600"
                  )}
                >
                  {section.id}
                </div>
                <div className="text-xs text-slate-400 dark:text-slate-600 leading-snug mt-0.5">
                  {section.title}
                </div>
              </div>
            </button>
          );
        })}
      </nav>

      <div className="px-2 mt-4 mb-1.5">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-600">
          Assessments
        </span>
      </div>
      <div className="space-y-0.5">
        {unit.quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-500 dark:text-slate-500"
          >
            <Circle className="w-3.5 h-3.5 shrink-0" />
            <div className="min-w-0">
              <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {quiz.title}
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-600">{quiz.dueDate}</div>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg">
          <Circle className="w-3.5 h-3.5 shrink-0 text-slate-400" />
          <div>
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">Unit Test</div>
            <div className="text-xs text-slate-400 dark:text-slate-600">{unit.testDate}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export function SectionSidebar({
  unit,
  progress,
  activeSectionId,
  onSelect,
  className,
}: Props) {
  return (
    <aside
      className={cn(
        "w-56 shrink-0 border-r border-slate-200 dark:border-slate-800 py-3 px-3 sticky top-[97px] self-start max-h-[calc(100vh-97px)] overflow-y-auto no-scrollbar",
        className
      )}
    >
      <SectionSidebarContent
        unit={unit}
        progress={progress}
        activeSectionId={activeSectionId}
        onSelect={onSelect}
      />
    </aside>
  );
}

function StatusIcon({
  status,
  locked,
  active,
}: {
  status: ReturnType<typeof getStudentSectionStatus>;
  locked: boolean;
  active: boolean;
}) {
  if (locked) {
    return <Lock className="w-3 h-3 shrink-0 text-slate-300 dark:text-slate-700 mt-0.5" />;
  }
  if (status === "complete") {
    return <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-green-500 mt-0.5" />;
  }
  if (status === "help") {
    return <HelpCircle className="w-3.5 h-3.5 shrink-0 text-red-500 mt-0.5" />;
  }
  if (status === "in-progress") {
    return (
      <div
        className={cn(
          "w-3.5 h-3.5 rounded-full border-2 shrink-0 mt-0.5",
          active ? "border-blue-500" : "border-blue-400 dark:border-blue-600"
        )}
      />
    );
  }
  return (
    <div className="w-3.5 h-3.5 rounded-full border-2 shrink-0 mt-0.5 border-slate-300 dark:border-slate-700" />
  );
}
