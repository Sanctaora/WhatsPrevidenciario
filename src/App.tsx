import React, { useEffect } from 'react';
import { MessageCircle, CheckCircle, Shield, Award, Users, Clock } from 'lucide-react';

declare global {
  interface Window {
    fbq: (action: string, event: string, params?: any) => void;
  }
}

function App() {
  useEffect(() => {
    // Track page view
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, []);

  const handleWhatsAppClick = () => {
    // Track conversion event
    if (window.fbq) {
      window.fbq('track', 'Contact', { content_name: 'WhatsApp Click' });
    }

    const whatsappNumber = "556291065665";
    const message = "Olá! Vim através do anúncio e preciso de ajuda com questões previdenciárias. Gostaria de falar com um especialista.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 relative">
        {/* Logo - 400px as requested */}
        <div className="mb-8 sm:mb-12 animate-fade-in">
          <img 
            src="/logo-jrfb-ENTALHE copy.png" 
            alt="JRFBadv" 
            className="h-48 sm:h-64 md:h-80 lg:h-[400px] w-auto mx-auto filter brightness-0 invert object-contain"
          />
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8 sm:mb-12 animate-slide-up max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Problemas com o
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300 mt-2">
              INSS?
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-200 font-medium">
            Especialistas em Direito Previdenciário
          </p>
        </div>

        {/* CTA Button - Above services as requested */}
        <div className="animate-fade-in-delayed mb-12 sm:mb-16">
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center space-x-4 px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg sm:text-xl font-semibold border border-green-400 pulse-animation"
          >
            <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10" />
            <span>Falar com Especialista</span>
          </button>
          <p className="text-center text-blue-200 text-sm sm:text-base mt-4">
            Atendimento imediato
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-12 sm:mb-16 animate-fade-in-delayed-2 max-w-4xl w-full">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 text-blue-100">Nossos Serviços</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-lg bg-blue-800/40 border border-blue-600/50 backdrop-blur-sm hover:bg-blue-700/40 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-base font-semibold mb-2">Aposentadoria por Idade</h3>
              <p className="text-blue-200 text-xs">Garantimos seus direitos previdenciários</p>
            </div>
            <div className="p-4 rounded-lg bg-blue-800/40 border border-blue-600/50 backdrop-blur-sm hover:bg-blue-700/40 transition-all duration-300">
              <Clock className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-base font-semibold mb-2">Aposentadoria por Tempo</h3>
              <p className="text-blue-200 text-xs">Análise completa do seu tempo de contribuição</p>
            </div>
            <div className="p-4 rounded-lg bg-blue-800/40 border border-blue-600/50 backdrop-blur-sm hover:bg-blue-700/40 transition-all duration-300">
              <Shield className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-base font-semibold mb-2">Auxílio-Doença</h3>
              <p className="text-blue-200 text-xs">Suporte completo para seu benefício</p>
            </div>
            <div className="p-4 rounded-lg bg-blue-800/40 border border-blue-600/50 backdrop-blur-sm hover:bg-blue-700/40 transition-all duration-300 sm:col-span-1 lg:col-span-1">
              <Users className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-base font-semibold mb-2">BPC/LOAS</h3>
              <p className="text-blue-200 text-xs">Benefício de prestação continuada</p>
            </div>
            <div className="p-4 rounded-lg bg-blue-800/40 border border-blue-600/50 backdrop-blur-sm hover:bg-blue-700/40 transition-all duration-300 sm:col-span-1 lg:col-span-1">
              <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-base font-semibold mb-2">Pensão por Morte</h3>
              <p className="text-blue-200 text-xs">Assistência em momentos difíceis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-950/80 border-t border-blue-700/50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-blue-200">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>OAB Regularizada</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-green-400" />
              <span>Especialistas Certificados</span>
            </div>
          </div>
          <div className="text-center text-xs text-blue-300 mt-4">
            <p>JRFBadv - Advocacia Especializada em Direito Previdenciário</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 25px rgba(34, 197, 94, 0.4); }
          50% { box-shadow: 0 0 35px rgba(34, 197, 94, 0.6); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1.2s ease-out 0.3s both;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in 1s ease-out 0.8s both;
        }
        
        .animate-fade-in-delayed-2 {
          animation: fade-in 1s ease-out 1.2s both;
        }

        .pulse-animation {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .pulse-animation {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

export default App;