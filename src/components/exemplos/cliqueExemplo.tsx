
import type { MouseEvent } from 'react';

export function CliqueExemplo() {
  // Tipamos o parâmetro 'event' como MouseEvent vindo de um elemento do tipo HTMLButtonElement
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('Botão clicado!', event.clientX); 
    // Agora o VS Code sabe que 'clientX' existe no evento de clique do mouse!
  };

  return (
    <button 
      onClick={handleClick}
      className="px-4 py-2 bg-sky-600 text-white rounded-lg cursor-pointer hover:bg-sky-500"
    >
      Clique em mim
    </button>
  );
}

