
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarDropdownProps {
  onNavClick: () => void;
}

const institutionalLinks = [
  { href: "/brands", label: "Nossas Marcas" },
  { href: "/ethics", label: "Ética e Valores" },
  { href: "/history", label: "Nossa História" },
  { href: "/apps", label: "Nossos Apps" },
];

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ onNavClick }) => {
  const location = useLocation();

  const isInstitutionalActive = () => {
    return institutionalLinks.some(link => location.pathname === link.href);
  };

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "relative px-4 py-2 text-[#282e76]/90 hover:text-[#282e76] transition-all duration-300 text-sm font-medium group rounded-lg hover:bg-[#0d7c3d]/10",
          "flex items-center gap-1 focus:outline-none",
          isInstitutionalActive()
            ? "text-[#282e76] bg-[#0d7c3d]/10"
            : ""
        )}
      >
        Institucional
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        <span className={cn(
          "absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-[#0d7c3d] to-[#282e76] transition-all duration-300",
          isInstitutionalActive() ? "w-full left-0" : "w-0 group-hover:w-full group-hover:left-0"
        )} />
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-2xl rounded-xl min-w-[220px] mt-2 overflow-hidden"
        align="start"
      >
        <div className="p-2">
          {institutionalLinks.map((link) => (
            <DropdownMenuItem key={link.href} className="p-0 focus:bg-transparent">
              <Link
                to={link.href}
                onClick={onNavClick}
                className={cn(
                  "w-full px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg",
                  "text-gray-700 hover:text-[#0d7c3d] hover:bg-gradient-to-r hover:from-[#0d7c3d]/10 hover:to-[#282e76]/5",
                  isActiveLink(link.href) 
                    ? "text-[#0d7c3d] bg-gradient-to-r from-[#0d7c3d]/15 to-[#282e76]/10 font-semibold" 
                    : ""
                )}
              >
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarDropdown;
