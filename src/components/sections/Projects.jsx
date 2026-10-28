import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    id: 1,
    category: "Portfolio",
    title: "Pesandi | Munasinghe Portfolio",
    description: "This personal brand portfolio — built with React, TailwindCSS v4, and a Node.js/MySQL backend — showcasing clean animations, a contact API, and a refined dark aesthetic.",
    tech: ["React", "TailwindCSS", "Node.js", "MySQL"],
    link: null,
    status: "Live",
  },
  {
    id: 2,
    category: "Dashboard",
    title: "Student Dashboard",
    description: "An intuitive academic management dashboard for tracking schedules, modules, and resources. Designed for clarity and daily utility.",
    tech: ["React", "TailwindCSS", "ANT Design"],
    link: "https://pmtech-dashboard.netlify.app/",
    status: "Live",
  },
  {
    id: 3,
    category: "E-Commerce",
    title: "DressMe Clothing",
    description: "A sleek e-commerce platform for a clothing brand. Focused on aesthetics, smooth browsing flows, and a responsive layout across all screen sizes.",
    tech: ["React", "TailwindCSS"],
    link: "https://pmtech-dressme.netlify.app/",
    status: "Live",
  },
  {
    id: 4,
    category: "AI Platform",
    title: "AI Chat Platform",
    description: "An AI-powered conversational interface designed for natural, engaging interactions — clean, responsive, and easy to use.",
    tech: ["React", "TailwindCSS"],
    link: "https://simple-aichatbot.netlify.app/",
    status: "Live",
  },
  {
    id: 5,
    category: "Mobile App",
    title: "Avurudu App",
    description: "A cross-platform mobile app celebrating Sri Lankan New Year with traditional games, built for smooth performance and a festive user experience.",
    tech: ["React Native", "Expo"],
    link: "https://avurudu2026.netlify.app/",
    status: "Live",
  },
  {
    id: 6,
    category: "Software",
    title: "Application Development",
    description: "Hotel and library management systems with a focus on OOP principles, clean system design, and structured database integration.",
    tech: ["Java OOP", "System Design", "Database Logic"],
    link: null,
    status: "Ongoing",
  },
];

const statusColor = {
  Live:    { dot: "bg-green-400",  text: "text-green-400" },
  Ongoing: { dot: "bg-yellow-400", text: "text-yellow-400" },
};

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-12 text-center">
            <div className="section-eyebrow text-blue-400/80">Portfolio</div>
            <h2 className="section-title mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Things I've{" "}
              <span className="gradient-text">built &amp; shipped.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              A selection of projects showcasing my approach to interface design, front-end engineering, and practical full-stack development.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(project => {
              const sc = statusColor[project.status] ?? { dot: "bg-slate-400", text: "text-slate-400" };
              return (
                <article
                  key={project.id}
                  className="glass-card group relative flex flex-col rounded-2xl p-6 overflow-hidden"
                >
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full border border-blue-500/20 bg-blue-500/8 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-blue-300">
                      {project.category}
                    </span>
                    <span className={`flex items-center gap-1.5 text-xs font-medium ${sc.text}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${sc.dot}`} />
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="section-title text-lg font-semibold text-white mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-6 text-slate-400 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map(t => (
                      <span key={t} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-0.5 text-[0.72rem] text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm text-blue-400 font-medium hover:text-blue-300 transition-colors"
                    >
                      View Live Demo
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  )}

                  {/* Hover radial glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.07),transparent_70%)]" />
                </article>
              );
            })}
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
