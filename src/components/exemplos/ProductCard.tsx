import {type  MouseEvent } from 'react';

// 1. Definimos a Interface das Props do Componente
interface ProductCardProps {
    id: number;
    title: string;
    price: number;
    category: string;
    isAvailable: boolean;
    tags?: string[]; // O ponto de interrogação '?' indica que esta prop é OPCIONAL
    onAddToCart: (productId: number, event: MouseEvent<HTMLButtonElement>) => void; // Tipagem de uma função recebida como prop
}

// 2. Criamos o componente e tipamos os parâmetros desestruturados
export function ProductCard({
    id,
    title,
    price,
    category,
    isAvailable,
    tags = [], // Valor padrão caso a prop opcional não seja enviada
    onAddToCart
}: ProductCardProps) {

    return (
        <div className="w-full max-w-sm rounded-xl bg-zinc-900 border border-zinc-800 p-5 flex flex-col justify-between shadow-lg">
            <div>
                {/* Categoria e Status */}
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                        {category}
                    </span>
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${isAvailable ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                        }`}>
                        {isAvailable ? 'Em Stock' : 'Esgotado'}
                    </span>
                </div>

                {/* Título e Preço */}
                <h3 className="text-lg font-bold text-zinc-100 mb-1 line-clamp-1">{title}</h3>
                <p className="text-2xl font-black text-zinc-50 mb-4">
                    {price.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' })}
                </p>

                {/* Tags Opcionais */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                        {tags.map((tag) => (
                            <span key={tag} className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-md font-medium">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Botão de Ação */}
            <button
                disabled={!isAvailable}
                onClick={(event) => onAddToCart(id, event)} // Passa o ID do produto e o evento nativo de volta para o pai
                className="w-full py-2.5 text-sm font-semibold rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-950 disabled:bg-zinc-800 disabled:text-zinc-600 transition-all cursor-pointer disabled:cursor-not-allowed text-center"
            >
                Adicionar ao Carrinho
            </button>
        </div>
    );
}