import Spline from "@splinetool/react-spline";
import { Shield, Brain } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[520px] w-full overflow-hidden rounded-none md:rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-slate-900">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        {/* soft gradient overlays that don't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 dark:from-slate-900/60 dark:via-slate-900/30 dark:to-slate-900/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/70 dark:bg-slate-800/70 backdrop-blur border border-black/5 dark:border-white/10 mb-4">
              <Shield className="h-3.5 w-3.5 text-emerald-500" />
              Secure, explainable AI for fair internship allocation
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              AI-Based Smart Allocation Engine for the PM Internship Scheme
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              Match students and opportunities with transparency. Combine skills, academics, preferences, and availability—optimized with modern AI and built for scale.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#insights"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-white bg-gradient-to-tr from-indigo-600 via-violet-600 to-amber-500 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/40 transition-all"
              >
                <Brain className="h-4 w-4" /> Explore Career Insights
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
