import React from 'react';

interface WhatsAppProps {
    animalId: number;
    nomeAnima: string;
}

const WhatsAppButton: React.FC<WhatsAppProps> = ({ animalId, nomeAnima }) => {
  const texto_Pronto = `Tenho%20interesse%20em%20adotar%20esse%20Pet%20${nomeAnima}%20Nº:%20${animalId}`;
  
  return (
    <a 
      href={`https://wa.me/5553991770609?text=${texto_Pronto}`}
      target="_blank" 
      rel="noopener noreferrer"
    >
      Enviar mensagem no WhatsApp
    </a>
  );
};

export default WhatsAppButton;
