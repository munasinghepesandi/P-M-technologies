import { SOCIAL_LINKS } from "../config/socialLinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#020617]/90 backdrop-blur-xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Top row */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Brand block */}
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/20 border border-blue-500/25 text-blue-400 font-bold text-xs">
                PM
              </div>
              <span className="font-semibold text-white text-sm">
                Pesandi <span className="text-blue-400 mx-0.5">|</span> Munasinghe
              </span>
            </a>
            <p className="text-sm leading-7 text-slate-500">
              Web developer crafting clean, performant, and visually refined digital experiences. Based in Sri Lanka&nbsp;🇱🇰
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-10 sm:gap-16">
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-600 mb-4">Navigation</div>
              <div className="flex flex-col gap-2.5">
                {["Home", "About", "Projects", "Contact"].map(item => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-600 mb-4">Social</div>
              <div className="flex flex-col gap-2.5">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                  LinkedIn
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                </a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                  GitHub
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600">
            &copy; {currentYear} Pesandi Munasinghe. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with React &amp; TailwindCSS
          </p>
        </div>

      </div>
    </footer>
  );
};
