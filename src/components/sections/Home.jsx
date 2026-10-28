import { RevealOnScroll } from "../RevealOnScroll";
import profileImage from "../../assets/prf.jpeg";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-16"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_10%_-10%,rgba(37,99,235,0.18),transparent),radial-gradient(ellipse_50%_50%_at_90%_10%,rgba(29,78,216,0.14),transparent)]" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-blue-600/12 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute bottom-24 right-12 h-56 w-56 rounded-full bg-indigo-600/10 blur-3xl animate-float-slow" style={{ animationDelay: "3s" }} />

      <RevealOnScroll>
        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-8 lg:grid-cols-[minmax(0,560px)_minmax(360px,1fr)] lg:gap-12">

          {/* ── Left: Text content ── */}
          <div className="flex max-w-[600px] flex-col items-start justify-center lg:pl-2">

            {/* Greeting */}
            <p className="mb-3 text-base font-medium text-slate-400 tracking-wide">
              Hi there, I'm
            </p>

            {/* Name */}
            <h1 className="section-title mb-5 text-[3.4rem] sm:text-[4.5rem] lg:text-[6rem] font-bold leading-[0.9] tracking-[-0.06em]">
              <span className="gradient-text block">Pesandi</span>
              <span className="text-white block">Munasinghe</span>
            </h1>

            {/* Role chips */}
            <div className="mb-6 flex flex-wrap gap-2.5">
              {["Web Developer", "Software Engineer", "UI Designer"].map(role => (
                <span key={role} className="rounded-full border border-blue-500/20 bg-blue-500/8 px-4 py-1.5 text-sm font-medium text-blue-300">
                  {role}
                </span>
              ))}
            </div>

            {/* Bio */}
            <p className="mb-8 max-w-xl text-base leading-8 text-slate-400">
              I build fast, accessible, and visually polished web experiences. Focused on clean code, intuitive interfaces, and solid full-stack structure that scales.
            </p>

            {/* CTAs */}
            <div className="mb-10 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </div>

            {/* Stats */}
            <div className="grid w-full max-w-md grid-cols-3 gap-3">
              {[
                { value: "3+",  label: "Years Learning" },
                { value: "10+", label: "Projects Built" },
                { value: "8+",  label: "Technologies" },
              ].map(stat => (
                <div key={stat.label} className="glass-panel rounded-2xl p-4 text-center">
                  <div className="text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="mt-1 text-[0.68rem] text-slate-500 leading-4">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Profile image (desktop only) ── */}
          <div className="relative hidden w-full lg:flex lg:justify-center">
            {/* Ambient glow */}
            <div className="absolute inset-x-10 top-1/2 h-[80%] -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="group relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-full border border-blue-300/50 bg-slate-900/60 p-2 ring-2 ring-blue-400/20 shadow-[0_0_35px_rgba(59,130,246,0.35),0_0_80px_rgba(37,99,235,0.2)] transition-shadow duration-500 hover:border-blue-200/80 hover:ring-blue-300/40 hover:shadow-[0_0_45px_rgba(96,165,250,0.55),0_0_100px_rgba(37,99,235,0.3)]">
              <img
                src={profileImage}
                alt="Pesandi Munasinghe"
                className="h-full w-full rounded-full bg-slate-900 object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>

          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
