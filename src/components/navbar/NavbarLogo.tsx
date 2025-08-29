
import React from "react";
import { Link } from "react-router-dom";

interface NavbarLogoProps {
  onNavClick: () => void;
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ onNavClick }) => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 min-w-[120px] sm:min-w-[140px]"
      onClick={onNavClick}
    >
      {/* Texto com fonte Blacker Display Heavy Italic */}
      <div className="font-blacker-heavy-italic text-xl sm:text-2xl font-black">
        <span className="text-[#282e76]">Grupo</span>
        <span className="text-[#0d7c3d]"> RedeCompras</span>
      </div>
    </Link>
  );
};

export default NavbarLogo;
