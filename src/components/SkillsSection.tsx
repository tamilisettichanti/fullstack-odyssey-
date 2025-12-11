import { useEffect, useRef, useState } from "react";
import { Code2, Database, Globe, Terminal } from "lucide-react";

const programmingLanguages = [
  { name: "Java", icon: "☕", color: "from-orange-500 to-red-500" },
  { name: "C", icon: "🔧", color: "from-blue-400 to-blue-600" },
  { name: "Python", icon: "🐍", color: "from-yellow-400 to-green-500" },
];

const webTechnologies = [
  { name: "HTML", icon: "📄", color: "from-orange-400 to-orange-600" },
  { name: "CSS", icon: "🎨", color: "from-blue-400 to-purple-500" },
  { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-yellow-600" },
];

const SkillCard = ({
  skill,
  index,
  isVisible,
}: {
  skill: { name: string; icon: string; color: string };
  index: number;
  isVisible: boolean;
}) => (
  <div
    className={`glass-card group cursor-pointer transition-all duration-500 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="flex flex-col items-center text-center">
      <div
        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
        style={{
          boxShadow: `0 10px 30px -10px hsl(var(--primary) / 0.3)`,
        }}
      >
        {skill.icon}
      </div>
      <h4 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
        {skill.name}
      </h4>
    </div>
  </div>
);

const SkillsSection = () => {
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
      id="skills"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-secondary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-center mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto mb-16 rounded-full" />

          {/* Programming Languages */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Programming Languages
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {programmingLanguages.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>

          {/* Web Technologies */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Web Technologies
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {webTechnologies.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index + 3}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
