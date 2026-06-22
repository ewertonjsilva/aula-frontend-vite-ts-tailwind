
import { type SyntheticEvent } from 'react';

export function FormularioExemplo() {

    const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Formulário enviado com segurança!');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xs bg-zinc-900 p-4 rounded-xl">
            <h3 className="text-lg font-bold text-white">Login</h3>
            <button
                type="submit"
                className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium cursor-pointer"
            >
                Enviar
            </button>
        </form>
    );
}

