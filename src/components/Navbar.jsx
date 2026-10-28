import { useEffect } from "react";
import { SOCIAL_LINKS } from "../config/socialLinks";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-white/[0.06] bg-[#020617]/80 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Brand */}
          <a href="#home" className="-ml-2 flex items-center gap-3 group">
            
            <span className="gradient-text font-semibold tracking-wide text-lg">
              Fullstack Web Developer
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white md:hidden"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {[
              { label: "Home",     href: "#home" },
              { label: "About",    href: "#about" },
              { label: "Projects", href: "#projects" },
            ].map(link => (
              <a key={link.label} href={link.href} className="nav-link px-4 py-2 rounded-lg hover:bg-white/5">
                {link.label}
              </a>
            ))}

            <div className="mx-3 h-4 w-px bg-white/10" />

            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="nav-link px-4 py-2 rounded-lg hover:bg-white/5">
              LinkedIn
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="nav-link px-4 py-2 rounded-lg hover:bg-white/5">
              GitHub
            </a>

            <a href="#contact" className="ml-3 btn-primary !py-2 !px-5 !text-sm">
              Hire Me
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};
