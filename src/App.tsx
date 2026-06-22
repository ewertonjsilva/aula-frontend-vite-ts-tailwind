import React, { useState } from 'react';

// Simulando dados que viriam de uma API de Machine Learning
const modelosIniciais = [
  { id: 1, nome: "Predição de Churn", acuracia: "94.2%", status: "Ativo" },
  { id: 2, nome: "Detecção de Anomalias IoT", acuracia: "89.7%", status: "Treinando" },
  { id: 3, nome: "Análise de Sentimento", acuracia: "91.5%", status: "Ativo" },
];

export default function App() {
  const [modelos, setModelos] = useState(modelosIniciais);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Navbar Responsiva */}
      <nav className="bg-blue-600 p-4 text-white shadow-md">
        <h1 className="text-xl font-bold text-center sm:text-left">🧠 InsightAI - Dashboard</h1>
      </nav>

      {/* Container Principal */}
      <main className="p-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">Modelos de IA em Execução</h2>

        {/* Grid Responsivo: 1 coluna no mobile, 2 em tablets, 3 em desktops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modelos.map((modelo) => (
            <div key={modelo.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-blue-700">{modelo.nome}</h3>
              <p className="text-gray-600 mt-2">Acurácia Atual: <span className="font-semibold text-gray-900">{modelo.acuracia}</span></p>

              <div className="mt-4 flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${modelo.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                  {modelo.status}
                </span>
                <button
                  onClick={() => alert(`Reexecutando inferência para: ${modelo.nome}`)}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded transition"
                >
                  Atualizar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}