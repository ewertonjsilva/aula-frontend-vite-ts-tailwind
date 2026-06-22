import { useState } from 'react';
import type { ChangeEvent, SyntheticEvent, MouseEvent } from 'react';

export function LoginForm() {
    // 1. Estados tipados automaticamente por inferência pelo TypeScript
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // 2. Tipagem do evento de mudança (onChange) para o Input de Email
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    // 3. Tipagem do evento de mudança (onChange) para o Input de Senha
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    // 4. Tipagem do evento de clique (onClick) para alternar a visibilidade da senha
    const handleTogglePassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Evita que o botão submeta o formulário por acidente
        setShowPassword(!showPassword);
    };

    // 5. Tipagem do evento de submissão (onSubmit) do formulário
    const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Aqui processaríamos o login seguro
        console.log('Dados enviados com segurança:', { email, password });
        alert(`Login realizado para: ${email}`);
    };

    return (
        <div className="w-full max-w-md p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl">
            <h2 className="text-2xl font-bold text-zinc-50 tracking-tight mb-1">
                Bem-vindo de volta
            </h2>
            <p className="text-sm text-zinc-400 mb-6">
                Insira as suas credenciais para aceder à sua conta.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Campo de Email */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                        Endereço de Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="exemplo@email.com"
                        className="px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                        required
                    />
                </div>

                {/* Campo de Senha */}
                <div className="flex flex-col gap-1.5 relative">
                    <label htmlFor="password" className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                        Palavra-passe
                    </label>
                    <div className="relative flex items-center">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="••••••••"
                            className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                            required
                        />
                        <button
                            type="button"
                            onClick={handleTogglePassword}
                            className="absolute right-3 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
                        >
                            {showPassword ? 'Ocultar' : 'Mostrar'}
                        </button>
                    </div>
                </div>

                {/* Botão de Submissão */}
                <button
                    type="submit"
                    className="w-full mt-2 py-3 bg-sky-600 hover:bg-sky-500 active:scale-[0.99] text-white font-medium rounded-lg shadow-lg shadow-sky-600/20 transition-all cursor-pointer text-center"
                >
                    Iniciar Sessão
                </button>
            </form>
        </div>
    );
}