import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Gamepad2, CloudSun, KeyRound } from "lucide-react";

const projects = [
  {
    title: "Simon Says Game",
    description:
      "An interactive memory game that challenges players to remember and repeat increasingly complex color sequences. Features smooth animations and engaging gameplay.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/tamilisettichanti/SimonSays",
    liveDemo: "https://tamilisettichanti.github.io/SimonSays/",
    icon: Gamepad2,
    accentColor: "from-green-400 to-emerald-500",
    glowColor: "185 100% 50%",
  },
  {
    title: "Weather App",
    description:
      "A sleek weather application that provides real-time weather data for any location worldwide. Features beautiful UI with dynamic weather-based backgrounds.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/tamilisettichanti/WeatherApp",
    liveDemo: "https://tamilisettichanti.github.io/PassWordGenerator/",
    icon: CloudSun,
    accentColor: "from-blue-400 to-cyan-500",
    glowColor: "220 100% 60%",
  },
  {
    title: "Password Generator",
    description:
      "A secure password generator tool that creates strong, randomized passwords with customizable length and character options. Essential for digital security.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/tamilisettichanti/PassWordGenerator",
    liveDemo: "https://tamilisettichanti.github.io/PassWordGenerator/",
    icon: KeyRound,
    accentColor: "from-purple-400 to-pink-500",
    glowColor: "270 100% 65%",
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto mb-16 rounded-full" />

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glowing border effect */}
                <div
                  className={`absolute -inset-0.5 rounded-2xl transition-all duration-500 blur-sm ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: `linear-gradient(135deg, hsl(${project.glowColor}), transparent)`,
                  }}
                />

                <div
                  className="relative glass-card h-full flex flex-col overflow-hidden"
                  style={{
                    transform:
                      hoveredIndex === index
                        ? "translateY(-5px) rotateX(2deg)"
                        : "translateY(0) rotateX(0)",
                    transition: "transform 0.3s ease-out",
                  }}
                >
                  {/* Project Icon Header */}
                  <div
                    className={`w-full h-32 bg-gradient-to-br ${project.accentColor} flex items-center justify-center relative -mx-6 -mt-6 mb-6`}
                    style={{ width: "calc(100% + 3rem)" }}
                  >
                    <project.icon className="w-16 h-16 text-background/90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-body text-muted-foreground mb-6 flex-1 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-body rounded-full bg-muted/50 text-muted-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 font-body"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                      <a
                        href={project.liveDemo}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 font-body"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
