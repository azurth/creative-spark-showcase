const projects = [
  {
    emoji: "📝",
    name: "Reminders Webpage",
    description: "A personal homework and task tracker I built and deployed as a live website. Actually use it day to day.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
    color: "hsl(35 95% 55%)",
  },
  {
    emoji: "🌐",
    name: "Portfolio Website",
    description: "Designed and deployed my own portfolio site. I actively update this.",
    tech: ["React", "Tailwind", "Netlify", "GitHub"],
    link: "#",
    color: "hsl(25 90% 50%)",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="blob w-72 h-72 bg-primary top-20 right-0" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-primary-foreground mb-4 inline-block"
            style={{ background: "var(--gradient-amber)" }}
          >
            My Work
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mt-3">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Random projects I've made over the years. Some are good. Some are not. All were fun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="glass-card rounded-3xl p-6 hover-lift group cursor-pointer"
              style={{ border: "1px solid hsl(var(--border))" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${project.color}40`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${project.color}25`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "";
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: `${project.color}20`, border: `1px solid ${project.color}30` }}
              >
                {project.emoji}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-lg text-xs font-medium"
                    style={{ background: `${project.color}15`, color: project.color }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                style={{ color: project.color }}
                onClick={(e) => e.stopPropagation()}
              >
                View Project <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
