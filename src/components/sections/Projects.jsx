import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {""}Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow">
              <h3 className="font-bold">Web Developing</h3>
              <br />
              <p>
                {" "}
                Contributing to develop the PHP and SQL query for an educational
                website project for E-SAY Education Pvt. Ltd.{" "}
              </p>
              <p>
                <a href="https://esayeducation.lk">Click here...</a>
              </p>
              <br />

              <div>
                {["HTML", "CSS", "JavaScript", "PHP", "MySQL"].map(
                  (tech, key) => (
                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2] transision">
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow">
              <h3 className="font-bold">Web Developing</h3>
              <br />
              <p> Developed a creative website for me as P&M Technologies. </p>
              <p>Available here...</p>
              <br />

              <div>
                {["React", "TailwindCSS", "EmailJs"].map((tech, key) => (
                  <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2] transision">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow">
              <h3 className="font-bold">Software Application Developing</h3>
              <br />
              <p>
                {" "}
                Developed a creative application for hotel management systems
                and library management systems.{" "}
              </p>
              <p>Ongoing project...</p>
              <br />

              <div>
                {["Java OOP"].map((tech, key) => (
                  <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2] transision">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
