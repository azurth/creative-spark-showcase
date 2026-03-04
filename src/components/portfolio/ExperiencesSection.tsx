const experiences = [
  {
    emoji: "🤼",
    title: "Wrestling",
    role: "Varsity Athlete",
    period: "2022 – Present",
    description:
      "Competing at the varsity level, learning discipline, grit, and how to push through when things get tough. Wrestling has taught me more about mental toughness than anything else.",
    tags: ["Discipline", "Teamwork", "Grit"],
    color: "hsl(35 95% 55%)",
  },
  // Add more experiences below — copy the block above and update the fields!
];

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="py-32 px-6 relative overflow-hidden">
      <div className="blob w-80 h-80 bg-primary top-20 right-0" style={{ animationDelay: "1.5s" }} />
      <div className="blob w-64 h-64 bg-accent bottom-20 left-0" style={{ animationDelay: "3.5s", opacity: 0.08 }} />

      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-primary-foreground mb-4 inline-block"
            style={{ background: "var(--gradient-amber)" }}
          >
            What I've Done
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mt-3">
            My <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            The activities, sports, and roles that have shaped who I am.
          </p>
        </div>

        {/* Experience cards */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="glass-card rounded-3xl p-8 hover-lift group"
              style={{ border: "1px solid hsl(var(--border))" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${exp.color}40`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 35px ${exp.color}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "";
              }}
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `${exp.color}20`,
                    border: `1px solid ${exp.color}35`,
                  }}
                >
                  {exp.emoji}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <span
                      className="px-3 py-0.5 rounded-full text-xs font-bold"
                      style={{ background: `${exp.color}20`, color: exp.color }}
                    >
                      {exp.role}
                    </span>
                  </div>

                  <p
                    className="text-xs font-semibold tracking-wider uppercase mb-3"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {exp.period}
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-medium"
                        style={{
                          background: `${exp.color}12`,
                          color: exp.color,
                          border: `1px solid ${exp.color}25`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
