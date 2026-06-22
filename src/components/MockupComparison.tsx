import { useMemo, useState } from 'react';
import { FeatureCard } from './ui/FeatureCard';

type PageId = 'dashboard' | 'relatorios' | 'configuracoes';

const pages: Array<{
  id: PageId;
  label: string;
  subtitle: string;
  details: string[];
}> = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    subtitle: 'Painel de métricas e atalhos para resultados rápidos.',
    details: ['Taxa de conversão crescente', '5 alertas novos', 'Visão geral de engajamento'],
  },
  {
    id: 'relatorios',
    label: 'Relatórios',
    subtitle: 'Seção de relatórios com filtros e histórico de acessos.',
    details: ['Gráficos atualizados em tempo real', 'Exportação para PDF', 'Histórico de eventos'],
  },
  {
    id: 'configuracoes',
    label: 'Configurações',
    subtitle: 'Personalize o comportamento da aplicação e preferências de UX.',
    details: ['Tema escuro / claro', 'Notificações ativadas', 'Privacidade e acessos'],
  },
];

export function MockupComparison() {
  const [mode, setMode] = useState<'spa' | 'mpa'>('spa');
  const [currentPage, setCurrentPage] = useState<PageId>('dashboard');
  const [loading, setLoading] = useState(false);
  const [draftNote, setDraftNote] = useState('Use este campo para anotar uma ideia de UX rápida.');
  const [savedNote, setSavedNote] = useState('');
  const [navigationCount, setNavigationCount] = useState(0);

  const current = useMemo(() => pages.find((page) => page.id === currentPage)!, [currentPage]);

  const handleNavigation = (pageId: PageId) => {
    if (pageId === currentPage) return;

    if (mode === 'spa') {
      setCurrentPage(pageId);
      setNavigationCount((count) => count + 1);
      return;
    }

    setLoading(true);
    window.setTimeout(() => {
      setCurrentPage(pageId);
      setDraftNote('');
      setSavedNote('');
      setNavigationCount((count) => count + 1);
      setLoading(false);
    }, 850);
  };

  const handleSaveNote = () => {
    setSavedNote(draftNote.trim() || 'Nenhuma nota salva ainda.');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 rounded-[2rem] border border-slate-200/90 bg-white p-6 shadow-sm shadow-slate-900/5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-950">Modo de comparação</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Escolha entre SPA e página com carregamento para ver a diferença no comportamento e manutenção de estado.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setMode('spa')}
            className={`btn-soft ${mode === 'spa' ? 'border-slate-900 bg-slate-950 text-white shadow-sm shadow-slate-900/10' : ''}`}>
            SPA
          </button>
          <button
            type="button"
            onClick={() => setMode('mpa')}
            className={`btn-soft ${mode === 'mpa' ? 'border-slate-900 bg-slate-950 text-white shadow-sm shadow-slate-900/10' : ''}`}>
            Página com carregamento
          </button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.95fr]">
        <section className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200/90 bg-white p-6 shadow-sm shadow-slate-900/5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">Por que isso importa?</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  O comportamento de navegação afeta desempenho percebido, retenção de estado e fluidez da interface. Este layout foca em clareza e interação eficiente.
                </p>
              </div>
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">
                {mode === 'spa' ? 'Navegação instantânea' : 'Carregamento de página'}
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FeatureCard
              icon="📱"
              title="Mobile-first"
              description="Design que funciona em telas pequenas antes de escalar para desktop, garantindo acessibilidade e espaços de toque adequados."
            />
            <FeatureCard
              icon="⚡"
              title="Experiência SPA"
              description="Transições suaves sem recarregar, mantendo estado e velocidade de navegação para o usuário."
              accent="bg-teal-100 text-teal-700"
            />
            <FeatureCard
              icon="🌐"
              title="Carregamento Completo"
              description="Simulação de uma página tradicional, onde a troca de conteúdo exige recarga completa e pode perder o contexto atual."
              accent="bg-amber-100 text-amber-800"
            />
            <FeatureCard
              icon="🎨"
              title="UI e UX"
              description="Tipografia clara, componentes alinhados e contraste acessível para uma experiência consistente."
              accent="bg-violet-100 text-violet-700"
            />
          </div>

          <div className="rounded-[2rem] border border-slate-200/90 bg-white p-6 shadow-sm shadow-slate-900/5">
            <h2 className="text-xl font-semibold text-slate-950">Diferenciais visuais</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                Layout adaptável com foco em leitura e ações fáceis em telas pequenas.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                Feedback visual imediato ao mudar de modo e navegar entre seções.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-500" />
                Simples, limpo e consistente para destacar a diferença entre abordagens.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white p-6 shadow-sm shadow-slate-900/5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Simulação de navegação</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">Transição de telas</h2>
              </div>
              <div className="rounded-3xl bg-slate-50 px-4 py-3 text-sm text-slate-700 shadow-inner shadow-slate-200/50">
                Mudanças: <span className="font-semibold text-slate-950">{mode === 'spa' ? 'Instantânea' : 'Com carregamento'}</span>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div className="flex flex-wrap gap-3">
                {pages.map((page) => (
                  <button
                    key={page.id}
                    type="button"
                    onClick={() => handleNavigation(page.id)}
                    className={`tab-button ${currentPage === page.id ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                    {page.label}
                  </button>
                ))}
              </div>

              <article className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50 p-5 shadow-sm shadow-slate-900/5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{current.label}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">{current.subtitle}</h3>
                  </div>
                  <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700">
                    {navigationCount} transições
                  </span>
                </div>

                <div className="mt-5 space-y-4 text-slate-700">
                  {current.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                      <p className="text-sm leading-6">{detail}</p>
                    </div>
                  ))}
                </div>
              </article>

              <div className="space-y-4 rounded-[1.75rem] border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">Teste de estado local</h3>
                    <p className="text-sm leading-6 text-slate-600">
                      No modo SPA, a nota permanece enquanto você navega. No modo de página com carregamento, a navegação limpa o estado e reinicia o fluxo.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleSaveNote}
                    className="btn-soft rounded-full border-slate-200 bg-slate-950 px-4 py-2 text-white hover:bg-slate-800">
                    Salvar nota
                  </button>
                </div>

                <label className="block text-sm font-medium text-slate-700">Nota de UX</label>
                <textarea
                  value={draftNote}
                  onChange={(event) => setDraftNote(event.target.value)}
                  rows={4}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                  <p className="font-medium text-slate-900">Última nota salva</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{savedNote || 'Nenhuma nota salva ainda.'}</p>
                </div>
              </div>
            </div>

            {loading ? (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/90 px-6 py-8 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-4 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-900/10">
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-slate-950" />
                  <p className="text-sm font-semibold text-slate-950">Carregando nova página...</p>
                  <p className="max-w-xs text-center text-sm text-slate-600">Esta animação evidencia a diferença entre recarga total e navegação interna.</p>
                </div>
              </div>
            ) : null}
          </div>

          <div className="rounded-[2rem] border border-slate-200/90 bg-white p-6 shadow-sm shadow-slate-900/5">
            <h2 className="text-xl font-semibold text-slate-950">Design responsivo</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Os blocos se reorganizam em telas maiores e o espaçamento permanece confortável para cliques e leitura em celulares.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Botões amplos</p>
                <p className="mt-2 text-sm text-slate-600">Facilitam a interação em dispositivos móveis e guiam o usuário sem confusão.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Hierarquia clara</p>
                <p className="mt-2 text-sm text-slate-600">Títulos e cartões utilizam contraste e espaçamento para destacar a informação mais importante.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
