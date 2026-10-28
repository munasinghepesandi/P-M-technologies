import { SOCIAL_LINKS } from "../config/socialLinks";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const navLinks = [
    { label: "Home",     href: "#home" },
    { label: "About",    href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact",  href: "#contact" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col bg-[#020617]/98 backdrop-blur-2xl transition-all duration-300 ease-in-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 h-16 border-b border-white/[0.06]">
        <span className="font-semibold text-white text-sm">
          Pesandi Munasinghe
        </span>
        <button
          onClick={() => setMenuOpen(false)}
          className="h-10 w-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:border-blue-500/30 hover:text-white transition"
          aria-label="Close Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Nav links */}
      <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            className={`w-full max-w-xs text-center rounded-2xl px-6 py-4 text-xl font-semibold text-white border border-transparent transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-500/20
              ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {link.label}
          </a>
        ))}

        <div className="my-6 h-px w-20 bg-white/10 rounded-full" />

        <div className="flex gap-3">
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="btn-secondary !py-2.5 !px-5 !text-sm">
            LinkedIn
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="btn-secondary !py-2.5 !px-5 !text-sm">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
