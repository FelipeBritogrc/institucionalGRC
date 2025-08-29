
import React from "react";
import { Download } from "lucide-react";
import InlineLink from "@/components/InlineLink";

const DownloadSection: React.FC = () => {
  return (
    <section className="mb-12">
      <div className="bg-gradient-to-r from-[#2545B8] to-[#0d7c3d] rounded-xl p-8 text-center text-white shadow-xl">
        <div className="flex items-center justify-center mb-4">
          <Download className="h-12 w-12 mr-4" />
          <h3 className="text-2xl font-bold">Código de Ética Completo</h3>
        </div>
        <p className="text-lg mb-6 opacity-90">
          Baixe o documento completo com todas as diretrizes éticas e de conduta do Grupo RedeCompras
        </p>
        <InlineLink 
          href="URL_DO_SEU_PDF_AQUI" 
          download={true}
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#2545B8] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <Download className="w-6 h-6" />
          Baixar PDF Completo
        </InlineLink>
      </div>
    </section>
  );
};

export default DownloadSection;
