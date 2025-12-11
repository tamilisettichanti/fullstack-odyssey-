import { Code, Lightbulb, Rocket, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable and scalable solutions",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Exploring cutting-edge technologies",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Building fast and efficient applications",
  },
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >

      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 -translate-y-1/2 bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto mb-16 rounded-full" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="glass-card">
              <h3 className="text-2xl font-display font-semibold text-primary mb-6">
                Who I Am
              </h3>
              <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed">
                <p>
                  I'm <span className="text-foreground font-semibold">Tamilisetti Chanti</span>, 
                  a passionate Full Stack Developer with a deep love for creating 
                  interactive and visually stunning web experiences. My journey in 
                  programming started with curiosity and has evolved into a dedicated 
                  pursuit of excellence.
                </p>
                <p>
                  I specialize in building modern web applications using cutting-edge 
                  technologies. From crafting pixel-perfect user interfaces to 
                  developing robust backend systems, I enjoy every aspect of the 
                  development process.
                </p>
                <p>
                  My goal is to continuously grow as a developer, contribute to 
                  innovative projects, and explore emerging technologies like AI, 
                  blockchain, and cloud computing. I believe in the power of code 
                  to transform ideas into reality.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`glass-card text-center transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
