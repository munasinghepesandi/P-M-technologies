import { RevealOnScroll } from "../RevealOnScroll";
import profileImage from "../../assets/profile.png";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "React",
    "JavaScript",
    "React Native",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap",
    
  ];
  const backendSkills = ["PHP", "MySQL", "Java", "Python"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 sm:mb-10 md:mb-12 text-center">
            <div className="section-eyebrow text-cyan-300/80">Profile</div>
            <h2 className="section-title mt-3 text-3xl sm:text-4xl font-bold text-white md:text-5xl">
              Built for thoughtful interfaces and reliable execution.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-400">
              I combine front-end craft with practical back-end awareness to create digital products that feel refined, work smoothly, and scale cleanly.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="glass-panel rounded-[2rem] p-6 sm:p-7 md:p-8 lg:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                <div className="relative w-fit">
                  <div className="absolute -inset-2 rounded-full bg-cyan-400/20 blur-lg" />
                  <img
                    src={profileImage}
                    alt="Pesandi Munasinghe"
                    className="relative h-24 w-24 rounded-full border-2 border-cyan-300/50 object-cover object-[center_15%] shadow-[0_14px_35px_rgba(34,211,238,0.24)] sm:h-40 sm:w-40"
                    loading="lazy"
                  />
                </div>
                <h3 className="section-title text-2xl font-bold text-white">Who I am</h3>
              </div>
              <p className="mt-5 leading-8 text-slate-300">
                I'm a software engineer specializing in web development, with a passion for crafting clean, user-friendly interfaces and robust back-end solutions. With a background in both front-end and back-end technologies, I bring a holistic approach to building digital products that are not only visually appealing but also functionally reliable and scalable.
              </p>

              <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                  <h3 className="text-lg font-semibold text-white">Frontend</h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {frontendSkills.map((tech) => (
                      <span key={tech} className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                  <h3 className="text-lg font-semibold text-white">Backend</h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {backendSkills.map((tech) => (
                      <span key={tech} className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <div className="glass-panel rounded-[2rem] p-6 sm:p-7 md:p-8">
                <h3 className="section-title text-2xl font-bold text-white">Education</h3>
                <ul className="mt-5 space-y-4 text-slate-300">
                  <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <strong className="text-white">BSc (Hon.) Software Engineering</strong> at Birmingham City University, UK, present.
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <strong className="text-white">Certificate in JavaScript and AI </strong> at CodeVerse, UK, Present.
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <strong className="text-white">Certificate in FullStack Engineering</strong> from StemLink(2025).
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    Relevant coursework includes web development, React, and practical software engineering fundamentals.
                  </li>
                </ul>
              </div>

              <div className="glass-panel rounded-[2rem] p-8">
                <h3 className="section-title text-2xl font-bold text-white">Soft Skills</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 text-slate-300">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Clear communication</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Time management</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Problem solving</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Team collaboration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
