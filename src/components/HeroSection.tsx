import { ArrowDown, Download, FolderOpen } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large rotating gradient orb */}
        <div
          className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full animate-rotate opacity-20"
          style={{
            background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)), hsl(var(--primary)))",
            filter: "blur(100px)",
          }}
        />

        {/* Floating orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full pulse-glow"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.4), transparent 70%)",
            transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full pulse-glow"
          style={{
            background: "radial-gradient(circle, hsl(var(--secondary) / 0.3), transparent 70%)",
            transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: "1s",
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <p className="text-primary font-body text-xl mb-4 tracking-widest uppercase">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Tamilisetti Chanti</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display text-muted-foreground mb-8">
              Full Stack Developer
            </h2>
            <p className="text-lg sm:text-xl font-body text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              A passionate full-stack developer who loves building interactive web
              experiences, solving real-world problems, and experimenting with
              futuristic UI concepts. I blend creativity with logic to craft
              clean, scalable, and modern digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/5N6@Chanti.pdf"
                download="Chanti_Resume"
                className="group glass-card px-8 py-4 flex items-center justify-center gap-3 glow-button animate-glow-pulse border-primary/30"
              >
                <Download className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-display font-semibold text-foreground">
                  Download Resume
                </span>
              </a>

              <a
                href="#projects"
                className="group glass-card px-8 py-4 flex items-center justify-center gap-3 hover:border-secondary/30"
              >
                <FolderOpen className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                <span className="font-display font-semibold text-foreground">
                  View Projects
                </span>
              </a>
            </div>
          </div>

          {/* Floating Developer Illustration */}
          <div
            className="flex-1 relative floating-animation"
            style={{
              transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
              transition: "transform 0.5s ease-out",
            }}
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-neon-gradient opacity-20 blur-3xl animate-pulse" />

              {/* Inner glass orb */}
              <div className="absolute inset-4 rounded-full glass-panel border-2 border-primary/30 animate-glow-pulse flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl sm:text-9xl font-display font-bold gradient-text">
                    TC
                  </div>
                  <div className="text-sm font-body text-muted-foreground mt-2">
                    &lt;/Developer&gt;
                  </div>
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-rotate" style={{ animationDuration: "15s" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg" style={{ boxShadow: "0 0 20px hsl(var(--primary))" }} />
              </div>
              <div className="absolute inset-0 animate-rotate" style={{ animationDuration: "20s", animationDirection: "reverse" }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary shadow-lg" style={{ boxShadow: "0 0 15px hsl(var(--secondary))" }} />
              </div>
              <div className="absolute inset-0 animate-rotate" style={{ animationDuration: "25s" }}>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-accent shadow-lg" style={{ boxShadow: "0 0 10px hsl(var(--accent))" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm font-body">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
