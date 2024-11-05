import { useEffect } from 'react';

const WatsonAssistant = () => {
  useEffect(() => {
    // Função para carregar o script do Watson Assistant
    const loadWatsonScript = () => {
      const script = document.createElement('script');
      script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
      script.onload = () => {
        window.watsonAssistantChatOptions = {
          integrationID: "97684d39-8e07-4b21-8983-4c53a6922ce2", // O ID da sua integração.
          region: "us-south", // A região onde sua integração está hospedada.
          serviceInstanceID: "a5d2274f-dcf0-43dd-88b8-853f2e496241", // O ID da sua instância de serviço.
          onLoad: async (instance) => { 
            await instance.render();
            instance.toggleWindow(); // Abre o widget automaticamente.
          }
        };
      };
      document.head.appendChild(script);
    };

    loadWatsonScript();

    // Cleanup function para remover o script ao desmontar o componente
    return () => {
      const script = document.querySelector('script[src^="https://web-chat.global.assistant.watson.appdomain.cloud"]');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null; // Não precisa renderizar nada para esse componente
};

export default WatsonAssistant;