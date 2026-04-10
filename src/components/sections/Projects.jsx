import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 sm:mb-10 md:mb-12 text-center">
            <div className="section-eyebrow text-cyan-300/80">Portfolio</div>
            <h2 className="section-title mt-3 text-3xl sm:text-4xl font-bold text-white md:text-5xl">
              Featured work presented with professional clarity.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base text-slate-400">
              A few examples of interface and application work that balance user experience, responsiveness, and practical development value.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">

            <article className="glass-panel group rounded-[2rem] p-5 sm:p-6 md:p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">Portfolio</span>
                <span className="text-xs text-slate-400">React / Tailwind</span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white">P&M Technologies Website</h3>
              <p className="mt-4 leading-7 text-slate-300">
                This site is built as a modern personal brand presence with smooth section flow, strong contrast, and a premium dark aesthetic.
              </p>
              <p className="mt-4 text-slate-400">
                Designed to feel clean, focused, and easy to browse on any screen size.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {['React', 'TailwindCSS', 'EmailJS'].map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{tech}</span>
                ))}
              </div>
            </article>

            <article className="glass-panel group rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">Individual</span>
                <span className="text-xs text-slate-400">React / Tailwind</span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white">Student Dashboard</h3>
              <p className="mt-4 leading-7 text-slate-300">
                This project is a student dashboard designed to provide an intuitive interface for managing academic information, schedules, and resources.
              </p>
              <p className="mt-4 text-slate-400">
                Developed with React and TailwindCSS, featuring a clean interface and responsive design for a wide range of devices.
              </p>
              <a href="https://pmtech-dashboard.netlify.app/" className="mt-5 inline-flex text-cyan-300 transition hover:text-cyan-200">
                Visit demo
              </a>

              <div className="mt-6 flex flex-wrap gap-2">
                {['React', 'TailwindCSS', 'ANT Design'].map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{tech}</span>
                ))}
              </div>
            </article>

            <article className="glass-panel group rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">Individual</span>
                <span className="text-xs text-slate-400">React / Tailwind</span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white">DressMe Clothing</h3>
              <p className="mt-4 leading-7 text-slate-300">
                This project is an e-commerce website for a clothing shop, designed to provide a seamless shopping experience with a focus on aesthetics and usability.
              </p>
              <p className="mt-4 text-slate-400">
                Developed with React and TailwindCSS, featuring a clean interface and responsive design for a wide range of devices.
              </p>
              <a href="https://pmtech-dressme.netlify.app/" className="mt-5 inline-flex text-cyan-300 transition hover:text-cyan-200">
                Visit demo
              </a>

              <div className="mt-6 flex flex-wrap gap-2">
                {['React', 'TailwindCSS'].map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{tech}</span>
                ))}
              </div>
            </article>

            <article className="glass-panel group rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">Individual</span>
                <span className="text-xs text-slate-400">React / Tailwind</span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white">AI Chat Platform</h3>
              <p className="mt-4 leading-7 text-slate-300">
                This project is an AI-powered chat platform designed to provide a natural and engaging conversation experience with a focus on responsiveness and user satisfaction.
              </p>
              <p className="mt-4 text-slate-400">
                Developed with React and TailwindCSS, featuring a clean interface and responsive design for a wide range of devices.
              </p>
              <a href="https://simple-aichatbot.netlify.app/" className="mt-5 inline-flex text-cyan-300 transition hover:text-cyan-200">
                Visit demo
              </a>

              <div className="mt-6 flex flex-wrap gap-2">
                {['React', 'TailwindCSS'].map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{tech}</span>
                ))}
              </div>
            </article>

            <article className="glass-panel group rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">Individual</span>
                <span className="text-xs text-slate-400">Expo / ReactNative</span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white">Avurudu App</h3>
              <p className="mt-4 leading-7 text-slate-300">
                A mobile app built to celebrate the Sri Lankan New Year with a collection of traditional games, designed for smooth performance and a festive user experience.
              </p>
              <p className="mt-4 text-slate-400">
                Developed with React Native and Expo, featuring a clean interface and responsive design for a wide range of devices.
              </p>
              <a href="https://avurudu2026.netlify.app/" className="mt-5 inline-flex text-cyan-300 transition hover:text-cyan-200">
                Visit mobile demo
              </a>

              <div className="mt-6 flex flex-wrap gap-2">
                {['React Native', 'Expo'].map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{tech}</span>
                ))}
              </div>
            </article>

            <article className="glass-panel group rounded-[2rem] p-5 sm:p-6 md:p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">Ongoing</span>
                <span className="text-xs text-slate-400">Java / OOP</span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white">Software Application Development</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Developing application solutions for hotel management and library management systems with a focus on structure and maintainability.
              </p>
              <p className="mt-4 text-slate-400">
                Currently evolving into a more polished and scalable solution.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {['Java OOP', 'System design', 'Database logic'].map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{tech}</span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
