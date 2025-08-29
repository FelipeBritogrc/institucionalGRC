
import React from "react";
import { Link } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";

interface DesktopMenuProps {
  onNavClick: () => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ onNavClick }) => {
  return (
    <div className="hidden lg:flex items-center space-x-2">
      <Link 
        to="/" 
        onClick={onNavClick}
        className="relative px-4 py-2 text-[#282e76]/90 hover:text-[#282e76] transition-all duration-300 text-sm font-medium group rounded-lg hover:bg-[#0d7c3d]/10"
      >
        Início
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0d7c3d] to-[#282e76] group-hover:w-full group-hover:left-0 transition-all duration-300" />
      </Link>
      
      <a 
        href="https://www.redecomprasdelivery.com.br/" 
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavClick}
        className="relative px-4 py-2 text-[#282e76]/90 hover:text-[#282e76] transition-all duration-300 text-sm font-medium group rounded-lg hover:bg-[#0d7c3d]/10"
      >
        Redecompras.com
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0d7c3d] to-[#282e76] group-hover:w-full group-hover:left-0 transition-all duration-300" />
      </a>

      <Link 
        to="/contact" 
        onClick={onNavClick}
        className="relative px-4 py-2 text-[#282e76]/90 hover:text-[#282e76] transition-all duration-300 text-sm font-medium group rounded-lg hover:bg-[#0d7c3d]/10"
      >
        Fale Conosco
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0d7c3d] to-[#282e76] group-hover:w-full group-hover:left-0 transition-all duration-300" />
      </Link>
      
      <Link 
        to="/careers" 
        onClick={onNavClick}
        className="relative px-4 py-2 text-[#282e76]/90 hover:text-[#282e76] transition-all duration-300 text-sm font-medium group rounded-lg hover:bg-[#0d7c3d]/10"
      >
        Trabalhe Conosco
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0d7c3d] to-[#282e76] group-hover:w-full group-hover:left-0 transition-all duration-300" />
      </Link>
      
      <NavbarDropdown onNavClick={onNavClick} />
      
      <a 
        href="https://linktr.ee/OfertasRedecompras" 
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavClick}
        className="relative px-4 py-2 text-[#282e76]/90 hover:text-[#282e76] transition-all duration-300 text-sm font-medium group rounded-lg hover:bg-[#0d7c3d]/10"
      >
        Encarte
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0d7c3d] to-[#282e76] group-hover:w-full group-hover:left-0 transition-all duration-300" />
      </a>
    </div>
  );
};

export default DesktopMenu;
