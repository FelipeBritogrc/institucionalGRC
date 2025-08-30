import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="text-8xl font-bold text-[#282e76] mb-4">404</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Página não encontrada</h1>
          <p className="text-gray-600 mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#282e76] to-[#0d7c3d] text-white font-semibold rounded-lg hover:from-[#0d7c3d] hover:to-[#282e76] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            <Home className="w-4 h-4" />
            Voltar para Home
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Rota tentada: <code className="bg-gray-100 px-2 py-1 rounded text-xs">{location.pathname}</code></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
