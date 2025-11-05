import { Rocket, Bot, BarChart3, LayoutDashboard } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-slate-900/80 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-amber-400" />
          <span className="font-semibold tracking-tight text-slate-900 dark:text-white text-lg">
            Intern India
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
          <a href="#dash" className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors">
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </a>
          <a href="#insights" className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors">
            <BarChart3 className="h-4 w-4" /> Career Insights
          </a>
          <a href="#chatbot" className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Bot className="h-4 w-4" /> Chatbot
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            Sign in
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-white bg-gradient-to-tr from-indigo-600 via-violet-600 to-amber-500 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/40 transition-all">
            <Rocket className="h-4 w-4" /> Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
