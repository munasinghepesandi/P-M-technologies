import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML", "CSS", "JavaScript", "TypeScript",
    "React", "React Native", "TailwindCSS", "Bootstrap",
  ];
  const backendSkills  = ["Node.js", "PHP", "MySQL", "Java", "Python"];
  const tools          = ["Git", "GitHub", "VS Code", "Figma", "Vite", "Netlify"];

  const education = [
    {
      icon: "🎓",
      title: "BSc (Hons) Software Engineering",
      org: "Birmingham City University, UK",
      time: "Present",
    },
    {
      icon: "💡",
      title: "Certificate in JavaScript & AI",
      org: "CodeVerse, UK",
      time: "2026",
    },
    {
      icon: "🏆",
      title: "Certificate in FullStack Engineering",
      org: "StemLink",
      time: "2025",
    },
  ];

  const softSkills = [
    { icon: "💬", label: "Clear Communication" },
    { icon: "⏱️", label: "Time Management" },
    { icon: "🔍", label: "Problem Solving" },
    { icon: "🤝", label: "Team Collaboration" },
    { icon: "🎯", label: "Attention to Detail" },
    { icon: "📚", label: "Continuous Learning" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-28"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-7xl">

          {/* Section header */}
          <div className="mb-12 text-center">
            <div className="section-eyebrow text-blue-400/80">About Me</div>
            <h2 className="section-title mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Building the web with{" "}
              <span className="gradient-text">precision &amp; passion.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400 leading-7">
              A software engineering student who turns ideas into clean, high-performance digital products — from first wireframe to production deployment.
            </p>
          </div>

          {/* Main grid */}
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Left column */}
            <div className="space-y-5">

              {/* Bio card */}
              <div className="glass-panel rounded-3xl p-7 md:p-8">
                <div>
                    <h3 className="section-title text-xl font-bold text-white">Pesandi Munasinghe</h3>
                    <p className="mt-1 text-sm font-medium text-blue-400">Web Developer &amp; Software Engineer</p>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      I'm a software engineering student at Birmingham City University, specialising in web development. I combine front-end craft with back-end awareness to build digital products that feel refined, perform smoothly, and scale cleanly.
                    </p>
                </div>
              </div>

              {/* Skills card */}
              <div className="glass-panel rounded-3xl p-7">
                <h3 className="section-title text-base font-semibold text-white mb-5">Technical Skills</h3>
                <div className="space-y-5">
                  <div>
                    <div className="mb-3 text-xs uppercase tracking-widest text-slate-600">Frontend</div>
                    <div className="flex flex-wrap gap-2">
                      {frontendSkills.map(s => <span key={s} className="skill-tag">{s}</span>)}
                    </div>
                  </div>
                  <div className="border-t border-white/[0.06]" />
                  <div>
                    <div className="mb-3 text-xs uppercase tracking-widest text-slate-600">Backend &amp; Databases</div>
                    <div className="flex flex-wrap gap-2">
                      {backendSkills.map(s => <span key={s} className="skill-tag">{s}</span>)}
                    </div>
                  </div>
                  <div className="border-t border-white/[0.06]" />
                  <div>
                    <div className="mb-3 text-xs uppercase tracking-widest text-slate-600">Tools &amp; Platforms</div>
                    <div className="flex flex-wrap gap-2">
                      {tools.map(t => <span key={t} className="skill-tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-5">

              {/* Education */}
              <div className="glass-panel rounded-3xl p-7">
                <h3 className="section-title text-base font-semibold text-white mb-5">Education</h3>
                <div className="space-y-3">
                  {education.map((item, i) => (
                    <div key={i} className="flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition hover:border-blue-500/20">
                      <div className="text-2xl leading-none mt-0.5 shrink-0">{item.icon}</div>
                      <div>
                        <div className="text-sm font-semibold text-white leading-5">{item.title}</div>
                        <div className="mt-1 text-xs text-slate-400">{item.org}</div>
                        <div className="mt-1.5 inline-flex items-center gap-1 rounded-full border border-blue-500/20 bg-blue-500/8 px-2 py-0.5 text-xs font-medium text-blue-300">
                          {item.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft skills */}
              <div className="glass-panel rounded-3xl p-7">
                <h3 className="section-title text-base font-semibold text-white mb-5">Professional Qualities</h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {softSkills.map(item => (
                    <div key={item.label} className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 transition hover:border-blue-500/20">
                      <span className="text-base">{item.icon}</span>
                      <span className="text-xs font-medium text-slate-300 leading-4">{item.label}</span>
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
