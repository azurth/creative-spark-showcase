const interests = [
  { emoji: "💻", label: "Coding", desc: "Obviously", color: "hsl(35 95% 55%)" },
  { emoji: "🎮", label: "Gaming", desc: "Too much of it", color: "hsl(280 70% 60%)" },
  { emoji: "🎵", label: "Music", desc: "Making & listening", color: "hsl(200 80% 55%)" },
  { emoji: "📚", label: "Reading", desc: "When I'm not coding", color: "hsl(150 60% 50%)" },
  { emoji: "🤖", label: "AI / ML", desc: "The future is wild", color: "hsl(25 90% 50%)" },
  { emoji: "🎨", label: "Design", desc: "Making things pretty", color: "hsl(340 80% 60%)" },
  { emoji: "🌌", label: "Space", desc: "It's just infinite??", color: "hsl(220 70% 60%)" },
  { emoji: "☕", label: "Coffee", desc: "Only started recently", color: "hsl(30 60% 45%)" },
];

export default function InterestsSection() {
  return (
    <section id="interests" className="py-32 px-6 relative overflow-hidden">
      <div className="blob w-80 h-80 bg-accent bottom-20 left-0" style={{ animationDelay: "1s" }} />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-primary-foreground mb-4 inline-block"
            style={{ background: "var(--gradient-amber)" }}
          >
            What I'm Into
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mt-3">
            My <span className="gradient-text">Interests</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            All the things that make up my interests
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {interests.map((item, i) => (
            <div
              key={item.label}
              className="glass-card rounded-3xl p-6 text-center hover-lift group"
              style={{
                border: "1px solid hsl(var(--border))",
                animationDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${item.color}40`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 25px ${item.color}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "";
              }}
            >
              <div
                className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 inline-block"
              >
                {item.emoji}
              </div>
              <div className="font-bold text-foreground text-sm">{item.label}</div>
              <div className="text-xs mt-1" style={{ color: item.color }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Fun quote */}
        <div className="mt-16 glass-card rounded-3xl p-8 text-center" style={{ border: "1px solid hsl(var(--primary) / 0.2)" }}>
          <p className="text-2xl font-bold text-foreground">
            "The best way to learn is to{" "}
            <span className="gradient-text">build something</span>{" "}
            you actually care about." 🚀
          </p>
          <p className="text-muted-foreground mt-3 text-sm">— probably someone smart, but also me now</p>
        </div>
      </div>
    </section>
  );
}
