import { useEffect, useRef, useState } from "react";
import { Award, Cloud, MessageSquare, Cpu } from "lucide-react";

const certifications = [
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    icon: Cloud,
    color: "from-blue-400 to-cyan-400",
    glowColor: "var(--primary)",
  },
  {
    title: "Prompt Engineering for ChatGPT",
    issuer: "Vanderbilt University",
    icon: MessageSquare,
    color: "from-purple-400 to-pink-400",
    glowColor: "var(--secondary)",
  },
  {
    title: "The Joy of Computing Using Python",
    issuer: "NPTEL",
    icon: Cpu,
    color: "from-green-400 to-emerald-400",
    glowColor: "var(--accent)",
  },
];

const CertificationsSection = () => {
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
      id="certifications"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-center mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto mb-16 rounded-full" />

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className={`group relative transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Glowing border effect */}
                <div
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                  style={{
                    background: `linear-gradient(135deg, hsl(${cert.glowColor}), transparent)`,
                  }}
                />
                
                <div className="relative glass-card h-full">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <cert.icon className="w-8 h-8 text-background" />
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm font-body text-primary uppercase tracking-wider">
                        Certified
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    
                    <p className="font-body text-muted-foreground">
                      {cert.issuer}
                    </p>
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

export default CertificationsSection;
