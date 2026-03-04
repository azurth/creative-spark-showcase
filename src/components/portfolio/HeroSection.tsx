import { useEffect, useState } from "react";

const roles = ["Student", "Creator", "Problem Solver", "Always Learning"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="blob w-96 h-96 bg-primary top-1/4 -left-24" style={{ animationDelay: "0s" }} />
      <div className="blob w-80 h-80 bg-accent top-1/2 right-0" style={{ animationDelay: "3s" }} />
      <div className="blob w-64 h-64 bg-primary bottom-0 left-1/3" style={{ animationDelay: "5s", opacity: 0.08 }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          Hey there 👋 I'm
        </p>

        <h1
          className="text-7xl md:text-9xl font-extrabold mb-6 leading-none animate-fade-up gradient-text"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Alex
        </h1>

        <div
          className="text-2xl md:text-4xl font-bold text-foreground mb-10 h-12 flex items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <span className="text-muted-foreground font-normal">I'm a</span>
          <span className="text-primary min-w-[300px] text-left">
            {displayed}
            <span className="cursor-blink text-primary ml-0.5">|</span>
          </span>
        </div>

        <p
          className="text-muted-foreground text-lg max-w-xl mx-auto mb-12 animate-fade-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          I build random stuff that I think is cool. Sometimes it works. Always learning something new.
        </p>

        <div className="animate-fade-up" style={{ animationDelay: "0.8s", opacity: 0 }}>
          <a
            href="#projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg text-primary-foreground animate-pulse-glow transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ background: "var(--gradient-amber)" }}
          >
            See What I've Made
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs animate-bounce">
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
}
