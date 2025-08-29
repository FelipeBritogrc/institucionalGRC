
import React from "react";

interface InlineLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  download?: boolean;
}

const InlineLink: React.FC<InlineLinkProps> = ({ href, children, className = "", download = false }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (download) {
      e.preventDefault();
      // Cria um elemento 'a' temporário para forçar o download
      const link = document.createElement('a');
      link.href = href;
      link.download = ''; // Força o download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Se for um botão de download com classe específica, aplica hover effect diferenciado
  const isDownloadButton = download && className.includes('inline-flex');

  return (
    <a 
      href={href}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      onClick={handleClick}
      className={isDownloadButton 
        ? `${className} transition-all duration-300 hover:bg-gray-50 hover:border-[#0d7c3d] hover:shadow-md active:transform active:scale-[0.98]`
        : `text-[#0d7c3d] font-semibold hover:text-[#282e76] hover:underline transition-colors duration-300 cursor-pointer ${className}`
      }
    >
      {children}
    </a>
  );
};

export default InlineLink;
