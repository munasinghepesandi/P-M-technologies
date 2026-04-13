import { useEffect } from "react";
import { SOCIAL_LINKS } from "../config/socialLinks";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 md:px-8">
        <div className="flex h-16 items-center justify-between py-2">

          <a href="#home" className="flex items-center gap-3 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)] transition-transform duration-300 group-hover:-translate-y-0.5">
              P&M
            </span>
            <span className="font-semibold tracking-wide text-white">
              Technologies
            </span>
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10 md:hidden"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle Menu"
          >
            <span className="text-2xl leading-none">&#9776;</span>
          </button>

          <div className="hidden items-center gap-8 md:flex">

            <a href="#home" className="text-sm text-slate-300 transition hover:text-white">
                Home
            </a>

            <a href="#about" className="text-sm text-slate-300 transition hover:text-white">
                About
            </a>

            <a href="#projects" className="text-sm text-slate-300 transition hover:text-white">
                Projects
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              GitHub
            </a>

            <a href="#contact" className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-400/20">
                Contact
            </a>

          </div>

        </div>
      </div>
    </nav>
  );
};
