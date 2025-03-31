import { useEffect, useState } from "react";

export default function JaculatoriaModal({ isOpen, onClose, texto }) {
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setProgresso(0);
      return;
    }

    let contador = 0;
    const intervalo = setInterval(() => {
      contador++;
      setProgresso(contador);
      if (contador === 10) {
        clearInterval(intervalo);
        // opcional: acionar callback ou próxima jaculatória
      }
    }, 3000);

    return () => clearInterval(intervalo);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-semibold mb-2">Rezar a Jaculatória</h2>
        <p className="text-lg mb-6">{texto}</p>

        <div className="flex justify-center gap-2 mb-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                i < progresso ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <p className="text-sm text-gray-500">Repetindo: {progresso} de 10</p>

        {progresso === 10 && (
          <button
            onClick={onClose}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Concluir
          </button>
        )}
      </div>
    </div>
  );
}
