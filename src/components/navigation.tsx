"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-glass bg-[hsl(var(--glass-bg))]  border-[hsl(var(--glass-border))] shadow-lg"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-robotoMono">{"<niaz_ahmed/>"}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-mono text-sm ">
            <button
              className="menu-color font-robotoMono cursor-pointer"
              onClick={() => scrollToSection("projects")}
            >
              .projects()
            </button>
            <button
              className="font-robotoMono cursor-pointer"
              onClick={() => scrollToSection("skills")}
            >
              .skills()
            </button>
            <button
              className="font-robotoMono cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              .contact()
            </button>
            <Button className="font-robotoMono">$ hire_me</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenu(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden backdrop-blur-glass bg-[hsl(var(--glass-bg))] border-t border-[hsl(var(--glass-border))]">
          <div className="px-4 pt-2 pb-3 space-y-1 text-sm">
            <Button variant="ghost" className="transition-btn">
              .project()
            </Button>
            <Button variant="ghost" className="transition-btn">
              .skills()
            </Button>
            <Button variant="ghost" className="transition-btn">
              .contact()
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
