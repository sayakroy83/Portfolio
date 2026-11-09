import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 border-t border-border bg-card/50 backdrop-blur-md py-10 px-6">
      <div className="container mx-auto max-w-4xl flex flex-col items-center justify-center text-center space-y-6">

        {/* Decorative divider line */}
        <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © {currentYear} <span className="text-primary font-medium">Sayak Roy</span>. All rights reserved.
        </p>

        {/* Scroll to top button */}
        <button
          onClick={handleScrollTop}
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/30 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] text-primary transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};
