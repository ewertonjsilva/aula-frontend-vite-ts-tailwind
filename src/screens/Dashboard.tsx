import { MetricCard } from '../components/exemplos/MetricCard';

// Dados falsos para preencher a tabela da Dashboard
const RECENT_USERS = [
    { id: 1, name: "Ana Silva", email: "ana.silva@email.com", role: "Admin", status: "Ativo" },
    { id: 2, name: "Carlos Santos", email: "carlos.s@email.com", role: "Editor", status: "Ativo" },
    { id: 3, name: "Beatriz Costa", email: "b.costa@email.com", role: "Usuário", status: "Inativo" },
    { id: 4, name: "Diogo Oliveira", email: "diogo.o@email.com", role: "Usuário", status: "Ativo" },
];

export function Dashboard() {
    return (
        <div className="min-h-screen w-screen bg-white text-zinc-900 flex">

            {/* 1. Barra Lateral (Sidebar) - Escondida em telas muito pequenas */}
            <aside className="hidden md:flex w-64 border-r border-zinc-200 bg-zinc-50 flex-col p-6 space-y-6">
                <div className="text-xl font-black text-sky-600 tracking-wider">⚡ ADMIN_SYS</div>
                <nav className="flex flex-col gap-1">
                    <a href="#" className="px-4 py-2.5 rounded-lg bg-sky-600/10 text-sky-700 font-medium text-sm transition-colors">Dashboard</a>
                    <a href="#" className="px-4 py-2.5 rounded-lg text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 font-medium text-sm transition-colors">Usuários</a>
                    <a href="#" className="px-4 py-2.5 rounded-lg text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 font-medium text-sm transition-colors">Definições</a>
                </nav>
            </aside>

            {/* 2. Conteúdo Principal */}
            <main className="flex-1 p-6 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
                {/* Cabeçalho da Página */}
                <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight">Visão Geral</h1>
                            <p className="text-sm text-zinc-600">Acompanhe as métricas e acessos da sua aplicação em tempo real.</p>
                        </div>
                    <button className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-medium text-sm cursor-pointer transition-colors shadow-lg shadow-sky-600/10">
                        Exportar Relatório
                    </button>
                </header>

                {/* 3. Grid de Métricas (Responsivo: 1 col no mobile, 3 col em telas grandes) */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <MetricCard title="Receita Total" value="14.280,50 €" change="+12.5%" isPositive={true} />
                    <MetricCard title="Novos Usuários" value="+1.420" change="+8.2%" isPositive={true} />
                    <MetricCard title="Taxa de Rejeição" value="24.1%" change="-2.4%" isPositive={false} />
                </section>

                {/* 4. Tabela de Usuários Recentes */}
                <section className="rounded-xl bg-white border border-zinc-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-zinc-200">
                        <h3 className="text-lg font-bold">Usuários Registrados Recentemente</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-zinc-200 bg-zinc-50 text-xs font-semibold uppercase text-zinc-600 tracking-wider">
                                    <th className="p-4">Nome</th>
                                    <th className="p-4">Cargo</th>
                                    <th className="p-4">Estado</th>
                                    <th className="p-4 text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-200 text-sm text-zinc-700">
                                {RECENT_USERS.map((user) => (
                                    <tr key={user.id} className="hover:bg-zinc-100 transition-colors">
                                        <td className="p-4">
                                            <div className="font-medium text-zinc-900">{user.name}</div>
                                            <div className="text-xs text-zinc-500">{user.email}</div>
                                        </td>
                                        <td className="p-4 align-middle">{user.role}</td>
                                        <td className="p-4 align-middle">
                                            <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${user.status === 'Ativo' ? 'bg-emerald-500/10 text-emerald-700' : 'bg-zinc-500/10 text-zinc-500'
                                                }`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="p-4 align-middle text-right">
                                            <button className="text-xs text-sky-600 hover:text-sky-500 font-medium cursor-pointer">
                                                Editar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

        </div>
    );
}