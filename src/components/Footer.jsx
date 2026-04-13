import { SOCIAL_LINKS } from "../config/socialLinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 px-4 sm:px-6 md:px-8 py-8 sm:py-10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="section-eyebrow text-cyan-300/80">P&M Technologies</div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
            A professional portfolio built to present web design and development work with clarity, structure, and a polished finish.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300">
          <a href="#home" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white">
            Home
          </a>
          <a href="#about" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white">
            About
          </a>
          <a href="#projects" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white">
            Projects
          </a>
          <a href="#contact" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white">
            Contact
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 sm:mt-8 flex max-w-7xl flex-col gap-3 sm:gap-4 border-t border-white/10 pt-5 sm:pt-6 text-xs sm:text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {currentYear} Pesandi Munasinghe. All rights reserved.</p>
        <p>Designed for clients, collaborators, and recruiters.</p>
      </div>
    </footer>
  );
};