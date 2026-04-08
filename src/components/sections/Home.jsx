import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 pb-20 pt-28 flex items-center justify-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.18),transparent_25%),linear-gradient(180deg,rgba(2,6,23,0.18),rgba(2,6,23,0.92))]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-56 w-56 rounded-full bg-indigo-500/15 blur-3xl animate-float-slow" />

      <RevealOnScroll>
        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-left">
            <div className="section-eyebrow mb-4 text-cyan-300/80">
              P&M Technologies
            </div>

            <h1 className="section-title mb-6 max-w-3xl text-5xl font-bold leading-[1.02] text-white md:text-7xl lg:text-8xl">
              Professional web experiences built with clarity and precision.
            </h1>

            <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              I am Pesandi Munasinghe, a web developer and founder focused on building clean digital products with strong performance, clear structure, and a refined visual presence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_18px_40px_rgba(34,211,238,0.25)]"
              >
                View Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                Start a Project
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="glass-panel rounded-2xl p-4">
                <div className="text-2xl font-bold text-white">Strategy</div>
                <div className="mt-1 text-sm text-slate-400">Clear goals and direction</div>
              </div>

              <div className="glass-panel rounded-2xl p-4">
                <div className="text-2xl font-bold text-white">Delivery</div>
                <div className="mt-1 text-sm text-slate-400">Responsive, reliable output</div>
              </div>

              <div className="glass-panel rounded-2xl p-4">
                <div className="text-2xl font-bold text-white">Support</div>
                <div className="mt-1 text-sm text-slate-400">Ongoing refinement</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.14),transparent_30%)]" />

              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                    Professional Focus
                  </span>
                  <span className="text-sm text-slate-400">Available for projects</span>
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                  <div className="text-sm uppercase tracking-[0.24em] text-slate-400">Core focus</div>
                  <div className="mt-3 text-2xl font-semibold text-white">
                    User-centered web design, front-end development, and practical back-end integration.
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Modern layouts",
                    "Responsive systems",
                    "Clear interactions",
                    "Accessible structure",
                    "Clean presentation",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll> 
    </section>
  );
};
