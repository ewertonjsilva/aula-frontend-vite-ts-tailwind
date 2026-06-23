import { useState } from 'react';
import type { ChangeEvent, SyntheticEvent, MouseEvent } from 'react';

type Theme = 'light' | 'dark';

interface LoginFormProps {
    theme: Theme;
    onThemeChange: (value: Theme) => void;
}

export function LoginForm({ theme, onThemeChange }: LoginFormProps) {
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
        <div
            className={`w-full max-w-md p-6 rounded-2xl border shadow-2xl transition-colors duration-300 ${
                theme === 'dark'
                    ? 'bg-slate-900 border-slate-700 text-slate-100'
                    : 'bg-white border-slate-200 text-slate-950'
            }`}
        >
            <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight mb-1">
                        Bem-vindo de volta
                    </h2>
                    <p className={`text-sm mb-0 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                        Insira as suas credenciais para aceder à sua conta.
                    </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border px-2 py-1 text-sm">
                    <button
                        type="button"
                        onClick={() => onThemeChange('light')}
                        className={`rounded-full px-3 py-1 transition ${
                            theme === 'light'
                                ? 'bg-sky-600 text-white'
                                : 'bg-transparent text-slate-500 hover:text-slate-700'
                        }`}
                    >
                        Claro
                    </button>
                    <button
                        type="button"
                        onClick={() => onThemeChange('dark')}
                        className={`rounded-full px-3 py-1 transition ${
                            theme === 'dark'
                                ? 'bg-slate-800 text-slate-100'
                                : 'bg-transparent text-slate-500 hover:text-slate-700'
                        }`}
                    >
                        Escuro
                    </button>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Campo de Email */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Endereço de Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="exemplo@email.com"
                        className={`px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all ${
                            theme === 'dark'
                                ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-600'
                                : 'bg-slate-100 border-slate-200 text-slate-950 placeholder-slate-400'
                        }`}
                        required
                    />
                </div>

                {/* Campo de Senha */}
                <div className="flex flex-col gap-1.5 relative">
                    <label htmlFor="password" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Palavra-passe
                    </label>
                    <div className="relative flex items-center">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="••••••••"
                            className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all ${
                                theme === 'dark'
                                    ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-600'
                                    : 'bg-slate-100 border-slate-200 text-slate-950 placeholder-slate-400'
                            }`}
                            required
                        />
                        <button
                            type="button"
                            onClick={handleTogglePassword}
                            className={`absolute right-3 text-xs font-medium transition-colors ${
                                theme === 'dark' ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-700'
                            }`}
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