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
              Just a teenager{" "}
              <span className="gradient-text">making things</span> ✨
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hey! I'm Alex — a high schooler who spends way too much time on random projects instead of homework.
                I love building stuff just to see if I can. Sometimes it's useful, sometimes it's just for fun.
              </p>
              <p>
                I taught myself to code through YouTube videos and a lot of googling. Now I'm obsessed with making
                things that <span className="text-primary font-semibold">actually work</span> — even if they're a little janky at first 😅
              </p>
              <p>
                When I'm not coding, I'm probably playing games, making music, or down a rabbit hole about something
                completely random. I'm always curious about literally everything.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {["Self-Taught", "Curious", "Creative", "Night Owl", "Music Lover"].map((tag) => (
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
      </div>
    </section>
  );
}
