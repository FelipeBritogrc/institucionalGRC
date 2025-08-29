
import React from "react";
import { BookOpen, Users, Handshake, Building, Shield, Camera, Leaf } from "lucide-react";

const GuidelinesSection: React.FC = () => {
  return (
    <section className="mb-20">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="flex items-center mb-6">
          <BookOpen className="h-10 w-10 text-[#2545B8] mr-4" />
          <h2 className="text-3xl font-bold text-[#2545B8]">Diretrizes Éticas e Conduta Corporativa</h2>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-[#0d7c3d] mb-4">1. Introdução</h3>
          <p className="text-gray-700 leading-relaxed">
            O compromisso com a ética, a honestidade, a transparência e a justiça são prioridade. 
            Acima de tudo respeitamos às leis e regulamentações, tratando com dignidade e clareza 
            nossos clientes, colaboradores, fornecedores, concorrentes, órgãos públicos, imprensa 
            e toda a comunidade. O relacionamento entre todos deve ser capaz de reforçar nossa base 
            para que nossa história permaneça íntegra e forte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Clientes */}
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-[#2545B8] mr-3" />
              <h3 className="text-xl font-bold text-[#2555B8]">2. Clientes</h3>
            </div>
            <p className="text-gray-700 mb-4">
              A relação com nossos clientes deve ser sempre pautada ao respeito e cordialidade. 
              Dentro de nossas lojas, todo colaborador deve saber se portar como um verdadeiro anfitrião.
            </p>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• Prestar informações verdadeiras com agilidade e transparência</p>
              <p>• Comprometer-se com os direitos do consumidor</p>
              <p>• Combater qualquer tipo de violência, discriminação e preconceito</p>
              <p>• Entender as necessidades dos clientes</p>
            </div>
          </div>

          {/* Fornecedores */}
          <div className="bg-green-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Handshake className="h-8 w-8 text-[#0d7c3d] mr-3" />
              <h3 className="text-xl font-bold text-[#0d7c3d]">3. Fornecedores</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Queremos que nossos fornecedores apliquem os mesmos princípios estabelecidos 
              neste Código de Ética e Conduta.
            </p>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• Cumprir todas as leis e diretrizes aplicáveis</p>
              <p>• Conduzir negócios com ética e honestidade</p>
              <p>• Tolerância zero a suborno ou corrupção</p>
              <p>• Respeitar direitos humanos e normas trabalhistas</p>
              <p>• Proteger informações confidenciais (LGPD)</p>
            </div>
          </div>

          {/* Concorrentes */}
          <div className="bg-purple-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-xl font-bold text-purple-600">4. Concorrentes</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Promovemos a concorrência justa e leal em todos os nossos negócios.
            </p>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• Respeito aos concorrentes</p>
              <p>• Proibido comentários depreciativos</p>
              <p>• Proteção de informações proprietárias</p>
              <p>• Não divulgação de informações comerciais</p>
            </div>
          </div>

          {/* Administração Pública */}
          <div className="bg-red-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-xl font-bold text-red-600">5. Administração Pública</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Interação ética e transparente com a administração pública, repudiando qualquer ato de corrupção.
            </p>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• Proibido dar ou receber pagamentos/presentes</p>
              <p>• Tratamento respeitoso com órgãos públicos</p>
              <p>• Neutralidade política</p>
              <p>• Registro de reuniões em ata</p>
            </div>
          </div>

          {/* Imprensa e Mídias Sociais */}
          <div className="bg-orange-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Camera className="h-8 w-8 text-orange-600 mr-3" />
              <h3 className="text-xl font-bold text-orange-600">6. Imprensa e Mídias Sociais</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Cuidamos da nossa relação com a imprensa e exposição nas redes sociais para manter nossa credibilidade.
            </p>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• Proteção da imagem da empresa</p>
              <p>• Entrevistas apenas com autorização</p>
              <p>• Proteção de informações de clientes</p>
              <p>• Comunicação oficial pela diretoria</p>
            </div>
          </div>

          {/* Meio Ambiente */}
          <div className="bg-emerald-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-emerald-600 mr-3" />
              <h3 className="text-xl font-bold text-emerald-600">7. Meio Ambiente</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Preservação do meio ambiente e uso sustentável dos recursos naturais na condução dos negócios.
            </p>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• Questionar atividades não sustentáveis</p>
              <p>• Relatar riscos ambientais imediatamente</p>
              <p>• Evitar desperdício de recursos naturais</p>
              <p>• Promover reciclagem eficaz</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-bold text-[#0d7c3d] mb-4">8. Responsabilidade Social</h3>
          <p className="text-gray-700 leading-relaxed">
            Fazemos parte de uma comunidade, por isso devemos estar atentos às demandas e oportunidades 
            que surjam para melhor servi-la. Acreditamos que a dedicação às causas que promovem 
            transformações sociais é a maneira mais direta de fazer a diferença. A oportunidade de 
            gerar emprego, o interesse em contribuir com o desenvolvimento e a prática de condutas 
            honestas e íntegras são formas de demonstrar nossa presença e preocupação com a sociedade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuidelinesSection;
