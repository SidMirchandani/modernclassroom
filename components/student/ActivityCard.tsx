"use client";

import { useState, useRef, type ReactNode } from "react";
import type { ActivityStatus } from "@/lib/types";
import { Lock, CheckCircle2, HelpCircle, Upload, X, Image } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  icon: ReactNode;
  title: string;
  color: "blue" | "violet" | "amber";
  status: ActivityStatus;
  locked: boolean;
  lockedMessage: string;
  children: ReactNode;
  requiresProof?: boolean;
  proofUrl?: string;
  onDone: (proofUrl?: string) => void;
  onHelp: () => void;
}

const colorMap = {
  blue: {
    badge: "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300",
    icon: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-100 dark:bg-blue-900",
    done: "bg-blue-600 hover:bg-blue-700 text-white",
    border: "border-slate-200 dark:border-slate-800",
    header: "border-blue-100 dark:border-blue-900/50",
  },
  violet: {
    badge: "bg-violet-50 dark:bg-violet-950 border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300",
    icon: "text-violet-600 dark:text-violet-400",
    iconBg: "bg-violet-100 dark:bg-violet-900",
    done: "bg-violet-600 hover:bg-violet-700 text-white",
    border: "border-slate-200 dark:border-slate-800",
    header: "border-violet-100 dark:border-violet-900/50",
  },
  amber: {
    badge: "bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300",
    icon: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-100 dark:bg-amber-900",
    done: "bg-amber-500 hover:bg-amber-600 text-white",
    border: "border-slate-200 dark:border-slate-800",
    header: "border-amber-100 dark:border-amber-900/50",
  },
};

export function ActivityCard({
  icon,
  title,
  color,
  status,
  locked,
  lockedMessage,
  children,
  requiresProof,
  proofUrl,
  onDone,
  onHelp,
}: Props) {
  const [uploadedFile, setUploadedFile] = useState<string | null>(proofUrl ?? null);
  const [dragging, setDragging] = useState(false);
  const [showConfirm, setShowConfirm] = useState<null | "done" | "help">(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const c = colorMap[color];

  const isDone = status === "done";
  const isHelp = status === "help";
  const isCompleted = isDone || isHelp;

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const url = e.target?.result as string;
      setUploadedFile(url);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleMarkDone = () => {
    if (requiresProof && !uploadedFile) return;
    onDone(uploadedFile ?? undefined);
    setShowConfirm(null);
  };

  const handleMarkHelp = () => {
    onHelp();
    setShowConfirm(null);
  };

  return (
    <div
      className={cn(
        "rounded-2xl border bg-white dark:bg-slate-900 overflow-hidden transition-opacity",
        c.border,
        locked && "opacity-60"
      )}
    >
      {/* Card Header */}
      <div
        className={cn(
          "flex items-center gap-3 px-5 py-4 border-b",
          c.header
        )}
      >
        <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", c.iconBg)}>
          <span className={c.icon}>{icon}</span>
        </div>
        <span className="font-semibold text-slate-900 dark:text-slate-100">{title}</span>

        <div className="ml-auto flex items-center gap-2">
          {locked && (
            <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-600">
              <Lock className="w-3.5 h-3.5" />
              Locked
            </span>
          )}
          {isDone && (
            <span className="flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 px-2.5 py-1 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Done
            </span>
          )}
          {isHelp && (
            <span className="flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 px-2.5 py-1 rounded-full">
              <HelpCircle className="w-3.5 h-3.5" />
              Help Requested
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="px-5 py-4">
        {locked ? (
          <p className="text-sm text-slate-400 dark:text-slate-600 flex items-center gap-2">
            <Lock className="w-3.5 h-3.5" />
            {lockedMessage}
          </p>
        ) : (
          <div className="space-y-4">
            <div>{children}</div>

            {/* Proof Upload */}
            {requiresProof && !isCompleted && (
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Proof of Completion
                </p>
                {uploadedFile ? (
                  <div className="relative inline-block">
                    <img
                      src={uploadedFile}
                      alt="Proof of completion"
                      className="max-h-32 rounded-lg border border-slate-200 dark:border-slate-700 object-contain"
                    />
                    <button
                      onClick={() => setUploadedFile(null)}
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-slate-700"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ) : (
                  <div
                    onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={cn(
                      "border-2 border-dashed rounded-xl p-5 flex flex-col items-center gap-2 cursor-pointer transition-colors",
                      dragging
                        ? "border-blue-400 bg-blue-50 dark:bg-blue-950"
                        : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                    )}
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <Upload className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                        Upload screenshot
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-600 mt-0.5">
                        Drag & drop or click to browse
                      </p>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFile(file);
                      }}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Proof Preview when completed */}
            {requiresProof && isCompleted && uploadedFile && (
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Image className="w-3 h-3" />
                  Submitted Proof
                </p>
                <img
                  src={uploadedFile}
                  alt="Submitted proof"
                  className="max-h-24 rounded-lg border border-slate-200 dark:border-slate-700 object-contain"
                />
              </div>
            )}

            {/* Action Buttons */}
            {!isCompleted && (
              <div>
                {showConfirm ? (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {showConfirm === "done" ? "Mark as done?" : "Request help?"}
                    </span>
                    <button
                      onClick={showConfirm === "done" ? handleMarkDone : handleMarkHelp}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:opacity-80 transition-opacity"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => setShowConfirm(null)}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowConfirm("done")}
                      disabled={requiresProof && !uploadedFile}
                      className={cn(
                        "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        requiresProof && !uploadedFile
                          ? "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed"
                          : c.done
                      )}
                      title={requiresProof && !uploadedFile ? "Upload proof to mark as done" : undefined}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Mark as Done
                    </button>
                    <button
                      onClick={() => setShowConfirm("help")}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
                    >
                      <HelpCircle className="w-4 h-4" />
                      I Need Help
                    </button>
                  </div>
                )}
                {requiresProof && !uploadedFile && (
                  <p className="mt-1.5 text-xs text-slate-400 dark:text-slate-600">
                    Upload a screenshot to mark as done
                  </p>
                )}
              </div>
            )}

            {/* Redo option if already completed */}
            {isCompleted && (
              <p className="text-xs text-slate-400 dark:text-slate-600">
                {isDone ? "Marked as complete." : "Help requested — your teacher will follow up."}{" "}
                {!requiresProof && (
                  <button
                    onClick={() => {
                      // In a real app, this would reset the state
                    }}
                    className="underline hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
                  >
                    Undo
                  </button>
                )}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
