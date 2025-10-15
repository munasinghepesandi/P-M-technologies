import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "React",
    "TailwindCSS",
    "JavaScript",
  ];
  const backendSkills = ["PHP", "MySQL", "Java", "Python"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Motivated and detail-oriented web developer undergraduate, with a
              strong foundation in front-end and back-end technologies,
              including HTML, CSS, Bootstrap, JavaScript, Java and PHP.
              Experienced in designing responsive e-commerce websites and
              passionate about creating userfriendly digital solutions. Actively
              pursuing opportunities to contribute and innovate in the tech
              industry. experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 translation-all">
                <h3>Frontend</h3>

                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2] transision">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 translation-all">
                <h3>Bckendend</h3>

                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2] transision">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>BSc (Hon.)Software Engineering </strong> Birmingham
                  City University, UK (Present)
                </li>

                <li>Relevant Coursework: Web Development (ReactJS)....</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
              <div className="space-y-4 text-gray-300">
                <p>Good communication , Time management</p>
                <p>Problem solving , Teamworking</p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
