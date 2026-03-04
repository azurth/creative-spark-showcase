export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Avatar side */}
          <div className="flex-shrink-0">
            <div
              className="w-52 h-52 rounded-3xl glass-card amber-glow flex items-center justify-center text-8xl hover-lift"
              style={{ border: "2px solid hsl(var(--primary) / 0.3)" }}
            >
              🧑‍💻
            </div>
          </div>

          {/* Bio card */}
          <div className="glass-card rounded-3xl p-8 flex-1 hover-lift" style={{ border: "1px solid hsl(var(--primary) / 0.2)" }}>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-primary-foreground"
                style={{ background: "var(--gradient-amber)" }}
              >
                About Me
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
            </div>

            <h2 className="text-4xl font-extrabold mb-4 text-foreground">
              Just a 10th grader{" "}
              <span className="gradient-text">making things</span> ✨
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hey! I'm Daniel — a 16 year old who builds random things.
                I don't consider myself a traditional coder. I just have ideas, and I figure out how to make them real.
              </p>
              <p>
                Most of my projects are AI-assisted, and I'm not shy about that. I think knowing how to use the right tools
                is its own skill. I care more about the <span className="text-primary font-semibold">end result looking good and working well</span> than how it got made.
              </p>
              <p>
                When I'm not on a random project, I'm playing video games, at the gym, or starting a new idea that brings me down a new rabbit hole.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {["10th Grade", "Creative", "Builder"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-medium glass-card"
                  style={{ border: "1px solid hsl(var(--primary) / 0.25)", color: "hsl(var(--primary))" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-12 glass-card rounded-3xl p-8" style={{ border: "1px solid hsl(var(--primary) / 0.2)" }}>
          <div className="flex items-center gap-3 mb-6">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-primary-foreground"
              style={{ background: "var(--gradient-amber)" }}
            >
              What I Work With
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { emoji: "🎨", label: "UI Design", desc: "Making things look good" },
              { emoji: "🤖", label: "AI Tools", desc: "Building with AI assistance" },
              { emoji: "🌐", label: "Web Projects", desc: "HTML, CSS, JavaScript" },
              { emoji: "⚡", label: "React", desc: "For bigger projects" },
              { emoji: "🖌️", label: "Figma", desc: "Design & wireframing" },
              { emoji: "🚀", label: "Netlify", desc: "Deploying live sites" },
              { emoji: "📦", label: "GitHub", desc: "Version control" },
              { emoji: "💡", label: "Ideation", desc: "Always got something brewing" },
            ].map((skill) => (
              <div
                key={skill.label}
                className="glass-card rounded-2xl p-4 hover-lift group text-center"
                style={{ border: "1px solid hsl(var(--border))" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "hsl(var(--primary) / 0.35)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 20px hsl(35 95% 55% / 0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                }}
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {skill.emoji}
                </div>
                <div className="font-bold text-foreground text-sm">{skill.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{skill.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
