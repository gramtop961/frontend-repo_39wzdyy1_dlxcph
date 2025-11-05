export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-300">
        <p>
          © {new Date().getFullYear()} Intern India. Built for the PM Internship Scheme.
        </p>
        <div className="flex items-center gap-4">
          <a href="#privacy" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
          <a href="#security" className="hover:text-slate-900 dark:hover:text-white">Security</a>
          <a href="#docs" className="hover:text-slate-900 dark:hover:text-white">Docs</a>
        </div>
      </div>
    </footer>
  );
}
