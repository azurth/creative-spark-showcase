const socials = [
  { label: "GitHub", emoji: "💾", href: "#", handle: "@alexdev" },
  { label: "Twitter / X", emoji: "🐦", href: "#", handle: "@alexbuilds" },
  { label: "Discord", emoji: "🎮", href: "#", handle: "alex#1234" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="blob w-96 h-96 bg-primary top-0 left-1/2 -translate-x-1/2" style={{ opacity: 0.08 }} />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <span
          className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-primary-foreground mb-4 inline-block"
          style={{ background: "var(--gradient-amber)" }}
        >
          Say Hi
        </span>
        <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mt-3 mb-4">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Got a cool idea? Want to collab? Or just want to say hey? My inbox is always open.
        </p>

        {/* Email CTA */}
        <a
          href="mailto:alex@example.com"
          className="group inline-flex items-center gap-4 glass-card rounded-2xl px-8 py-5 mb-10 hover-lift w-full justify-center max-w-md mx-auto"
          style={{ border: "1px solid hsl(var(--primary) / 0.25)" }}
        >
          <span className="text-3xl">✉️</span>
          <div className="text-left">
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Email me at</div>
            <div className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
              alex@example.com
            </div>
          </div>
          <span className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-all">→</span>
        </a>

        {/* Social links */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="glass-card rounded-2xl p-5 hover-lift flex flex-col items-center gap-2 group"
              style={{ border: "1px solid hsl(var(--border))" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "hsl(var(--primary) / 0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "";
              }}
            >
              <span className="text-2xl group-hover:scale-110 transition-transform inline-block">{s.emoji}</span>
              <span className="font-bold text-foreground text-sm">{s.label}</span>
              <span className="text-xs text-muted-foreground">{s.handle}</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t pt-8" style={{ borderColor: "hsl(var(--border))" }}>
          <p className="text-muted-foreground text-sm">
            Built with ☕ and way too many browser tabs · 2024
          </p>
          <p className="text-xs text-muted-foreground/50 mt-2">
            Made with React + Tailwind · Hosted on Netlify
          </p>
        </div>
      </div>
    </section>
  );
}
