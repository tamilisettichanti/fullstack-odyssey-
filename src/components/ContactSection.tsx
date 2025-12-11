import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/tamilisettichanti",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:contact@chanti.dev",
    color: "hover:text-primary",
  },
];

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto mb-8 rounded-full" />
          <p className="text-center text-muted-foreground font-body text-lg max-w-2xl mx-auto mb-16">
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Let's create something amazing together!
          </p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="relative group">
              {/* Animated border */}
              <div className="absolute -inset-0.5 rounded-2xl bg-neon-gradient opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-500 animate-gradient" />

              <form
                onSubmit={handleSubmit}
                className="relative glass-card space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body text-sm text-muted-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-body text-sm text-muted-foreground mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-sm text-muted-foreground mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-display font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed glow-button animate-glow-pulse"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Social Links & Info */}
            <div className="flex flex-col justify-center">
              <div className="glass-card mb-8">
                <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Let's Connect
                </h3>
                <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach out
                  through the form or connect with me on social media.
                </p>

                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground ${social.color} hover:border-primary/30 hover:scale-110 transition-all duration-300`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Download Resume Card */}
              <a
                href="#"
                className="group glass-card flex items-center gap-4 hover:border-primary/30 animate-glow-pulse"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    Download Resume
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    Get my complete CV
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
