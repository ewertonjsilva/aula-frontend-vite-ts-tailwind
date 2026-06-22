
import { useState } from 'react';
import type { ChangeEvent } from 'react';

export function InputExemplo() {
    const [nome, setNome] = useState('');

    // Tipamos como ChangeEvent vindo de um HTMLInputElement
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value);
        // O TS sabe exatamente que 'event.target.value' é uma string correspondente ao input
    };

    return (
        <div className="flex flex-col gap-2 max-w-xs">
            <label className="text-zinc-300 text-sm">Seu nome:</label>
            <input
                type="text"
                value={nome}
                onChange={handleChange}
                className="px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-sky-500"
            />
            <p className="text-xs text-zinc-400">Digitado: {nome}</p>
        </div>
    );
}

