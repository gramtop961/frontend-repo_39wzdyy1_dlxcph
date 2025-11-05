import { Brain, Bot, BarChart3, ShieldCheck, Users, Building2 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Allocation Engine",
    desc:
      "Weighted matching across skills, academics, domain relevance, location, and availability with fairness optimization.",
  },
  {
    icon: Bot,
    title: "Gemini-Powered Assistant",
    desc:
      "Ask questions, get recommendations, and receive guidance with contextual understanding right inside your dashboard.",
  },
  {
    icon: BarChart3,
    title: "Career Insights",
    desc:
      "Visual analytics on skills demand, success rates, and personalized growth paths with AI-generated insights.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    desc:
      "Role-based access with JWT, encrypted sensitive data, and auditable allocation logs for transparency.",
  },
  {
    icon: Users,
    title: "Student-Centric",
    desc:
      "Build rich profiles, set preferences, and track recommendations designed to maximize fit and opportunity.",
  },
  {
    icon: Building2,
    title: "Organization Tools",
    desc:
      "Post openings, review matched students, and collaborate with admins to run fair and efficient cohorts.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Built for fair, transparent allocations
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Intern India brings AI, security, and delightful UX together to power the PM Internship Scheme at scale.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6 hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-500/20 via-violet-500/20 to-amber-400/20 blur-2xl group-hover:opacity-100 opacity-0 transition-opacity" />
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-tr from-indigo-600 via-violet-600 to-amber-500 text-white shadow-md">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
