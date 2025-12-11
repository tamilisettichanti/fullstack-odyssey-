import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-border/50">
      {/* Glass background */}
      <div className="absolute inset-0 glass-panel rounded-none border-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground font-body">
            <span>© 2025</span>
            <span className="font-display font-semibold text-primary">
              Tamilisetti Chanti
            </span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground font-body">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />
            <span>using</span>
            <Code className="w-4 h-4 text-primary" />
            <span className="text-foreground">HTML, CSS & JavaScript</span>
          </div>

          <a
            href="#home"
            className="font-display text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
