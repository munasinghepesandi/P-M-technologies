import { SOCIAL_LINKS } from "../config/socialLinks";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-40 flex w-full flex-col items-center justify-center bg-slate-950/95 px-6 py-10 backdrop-blur-2xl transition-all duration-300 ease-in-out
    
    ${
      menuOpen
        ? "h-screen opacity-100 pointer-events-auto"
        : "h-0 opacity-0 pointer-events-none"
    }
    `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute right-6 top-6 cursor-pointer rounded-full border border-white/10 bg-white/5 px-4 py-2 text-3xl text-white focus:outline-none"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home" onClick={() => setMenuOpen(false)}
        className={`my-4 text-2xl font-semibold text-white transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Home
      </a>

      <a
        href="#about" onClick={() => setMenuOpen(false)}
        className={`my-4 text-2xl font-semibold text-white transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        About
      </a>

      <a
        href="#projects" onClick={() => setMenuOpen(false)}
        className={`my-4 text-2xl font-semibold text-white transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Projects
      </a>

      <a
        href="#contact" onClick={() => setMenuOpen(false)}
        className={`my-4 text-2xl font-semibold text-white transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Contact
      </a>

      <a
        href={SOCIAL_LINKS.linkedin}
        target="_blank"
        rel="noreferrer"
        className={`my-4 text-2xl font-semibold text-white transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        LinkedIn
      </a>

      <a
        href={SOCIAL_LINKS.github}
        target="_blank"
        rel="noreferrer"
        className={`my-4 text-2xl font-semibold text-white transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        GitHub
      </a>
    </div>
  );
};
