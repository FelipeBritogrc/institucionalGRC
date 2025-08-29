
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import NavbarLogo from "./navbar/NavbarLogo";
import DesktopMenu from "./navbar/DesktopMenu";
import MobileMenu from "./navbar/MobileMenu";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300",
        scrolled 
          ? "shadow-xl border-b border-white/20 backdrop-blur-md" 
          : "backdrop-blur-sm"
      )}
      style={{
        background: scrolled 
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(255, 255, 255, 0.90)",
        borderBottom: scrolled ? "1px solid rgba(13, 124, 61, 0.1)" : "none"
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#0d7c3d]/5 rounded-full blur-2xl transform -translate-y-1/2" />
        <div className="absolute top-0 right-1/3 w-24 h-24 bg-[#282e76]/5 rounded-full blur-xl transform -translate-y-1/2" />
      </div>

      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 h-16 sm:h-18 relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <NavbarLogo onNavClick={handleNavClick} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <DesktopMenu onNavClick={handleNavClick} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative p-2 text-[#282e76] hover:text-[#0d7c3d] transition-all duration-300 hover:bg-[#0d7c3d]/10 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            {mobileMenuOpen ? (
              <X size={24} className="absolute inset-0 transition-all duration-300 rotate-0" />
            ) : (
              <Menu size={24} className="absolute inset-0 transition-all duration-300 rotate-0" />
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onNavClick={handleNavClick} />
    </nav>
  );
};

export default Navbar;
