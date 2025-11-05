import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 text-slate-900 dark:text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          <Hero />
        </div>
        <Features />
        <section id="insights" className="py-16">
          <div className="rounded-3xl border border-black/5 dark:border-white/10 p-6 sm:p-10 bg-white/70 dark:bg-slate-900/60 backdrop-blur">
            <h3 className="text-xl sm:text-2xl font-semibold">Career Insights Preview</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">
              Explore top skills, domains, and AI-powered suggestions tailored to your profile. Connect your account to unlock personalized insights.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="rounded-xl border border-black/5 dark:border-white/10 p-4 bg-white/80 dark:bg-slate-800/60">
                <p className="text-slate-500">Top Domains</p>
                <p className="mt-1 font-medium">Data Analytics, Cybersecurity, AI/ML</p>
              </div>
              <div className="rounded-xl border border-black/5 dark:border-white/10 p-4 bg-white/80 dark:bg-slate-800/60">
                <p className="text-slate-500">Skills to Learn</p>
                <p className="mt-1 font-medium">Python, SQL, Cloud Security</p>
              </div>
              <div className="rounded-xl border border-black/5 dark:border-white/10 p-4 bg-white/80 dark:bg-slate-800/60">
                <p className="text-slate-500">Suggested Path</p>
                <p className="mt-1 font-medium">Complete a cloud cert and build 2 projects</p>
              </div>
              <div className="rounded-xl border border-black/5 dark:border-white/10 p-4 bg-white/80 dark:bg-slate-800/60">
                <p className="text-slate-500">Industry Trend</p>
                <p className="mt-1 font-medium">Cybersecurity internships up 22% YoY</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
