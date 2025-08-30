
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onNavClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onNavClick }) => {
  const [institutionalOpen, setInstitutionalOpen] = useState(false);

  const handleInstitutionalToggle = () => {
    setInstitutionalOpen(!institutionalOpen);
  };

  const handleInstitutionalLinkClick = () => {
    setInstitutionalOpen(false);
    onNavClick();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(10px)",
            borderTop: "1px solid rgba(13, 124, 61, 0.1)"
          }}
        >
          {/* Decorative background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-24 h-24 bg-[#0d7c3d]/5 rounded-full blur-xl" />
            <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-[#282e76]/5 rounded-full blur-2xl" />
          </div>

          <div className="relative z-10 px-4 py-6 space-y-2">
            <Link 
              to="/" 
              onClick={onNavClick}
              className="block px-4 py-3 text-[#282e76]/90 hover:text-[#282e76] hover:bg-[#0d7c3d]/10 rounded-xl transition-all duration-300 text-sm font-medium"
            >
              Início
            </Link>
            <a 
              href="https://www.redecomprasdelivery.com.br/" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={onNavClick}
              className="block px-4 py-3 text-[#282e76]/90 hover:text-[#282e76] hover:bg-[#0d7c3d]/10 rounded-xl transition-all duration-300 text-sm font-medium"
            >
              Redecompras.com
            </a>
            <Link 
              to="/careers" 
              onClick={onNavClick}
              className="block px-4 py-3 text-[#282e76]/90 hover:text-[#282e76] hover:bg-[#0d7c3d]/10 rounded-xl transition-all duration-300 text-sm font-medium"
            >
              Trabalhe Conosco
            </Link>
            
            {/* Institucional Dropdown */}
            <div className="rounded-xl overflow-hidden bg-[#0d7c3d]/5">
              <button
                onClick={handleInstitutionalToggle}
                className="flex items-center justify-between w-full px-4 py-3 text-[#282e76]/90 hover:text-[#282e76] hover:bg-[#0d7c3d]/10 transition-all duration-300 text-sm font-medium"
              >
                Institucional
                {institutionalOpen ? 
                  <ChevronUp className="w-4 h-4 transition-transform duration-300" /> : 
                  <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                }
              </button>
              
              <AnimatePresence>
                {institutionalOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#0d7c3d]/10 backdrop-blur-sm"
                  >
                    <div className="px-2 py-2 space-y-1">
                      <Link 
                        to="/brands" 
                        onClick={handleInstitutionalLinkClick}
                        className="block px-4 py-2 text-[#282e76]/80 hover:text-[#282e76] hover:bg-[#0d7c3d]/10 rounded-lg transition-all duration-300 text-sm ml-2"
                      >
                        Nossas Marcas
                      </Link>
                      <Link 
                        to="/ethics" 
                        onClick={handleInstitutionalLinkClick}
                        className="block px-4 py-2 text-[#282e76]/80 hover:text-[#282e76] hover:bg-[#0d7c3d]/10 rounded-lg transition-all duration-300 text-sm ml-2"
                      >
                        Ética e Valores
                      </Link>
                      <Link 
                        to="/history" 
                        onClick={handleInstitutionalLinkClick}
                        className="block px-4 py-2 text-[#282e76]/80 hover:text-[#282e76] hover:bg-[#0d7c3d]/10 rounded-lg transition-all duration-300 text-sm ml-2"
                      >
                        Nossa História
                      </Link>
                      <Link 
                        to="/apps" 
                        onClick={handleInstitutionalLinkClick}
                        className="block px-4 py-2 text-[#282e76]/80 hover:text-[#282e76] hover:bg-[#0d7c3d]/10 rounded-lg transition-all duration-300 text-sm ml-2"
                      >
                        Nossos Apps
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onNavClick();
                // TODO: Adicionar link dos encartes quando disponível
              }}
              className="block px-4 py-3 text-[#282e76]/90 hover:text-[#282e76] hover:bg-[#0d7c3d]/10 rounded-xl transition-all duration-300 text-sm font-medium"
            >
              Encarte
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
