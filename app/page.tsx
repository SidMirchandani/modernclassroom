import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/Logo";
import { GraduationCap, LayoutGrid } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
        <Logo href="/" textClassName="text-sm" />
        <ThemeToggle />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <div className="mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-medium">
            Unit 3 · Linear Models and Systems
          </div>

          <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Welcome back
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            How are you accessing the classroom today?
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <Link
              href="/student"
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-slate-100">Student</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  Track your progress
                </div>
              </div>
            </Link>

            <Link
              href="/teacher"
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-violet-500 dark:hover:border-violet-500 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-50 dark:bg-violet-950 flex items-center justify-center group-hover:bg-violet-100 dark:group-hover:bg-violet-900 transition-colors">
                <LayoutGrid className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-slate-100">Teacher</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  View class progress
                </div>
              </div>
            </Link>
          </div>

          <p className="mt-8 text-xs text-slate-400 dark:text-slate-600">
            Demo mode · No login required
          </p>
        </div>
      </main>
    </div>
  );
}
