"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { GiPrayerBeads } from "react-icons/gi";

const misterios = [
  { title: "Primeiro Mistério Gozozo", description: "Anunciação, a Visitação, o Nascimento, a Apresentação de Jesus no Templo e a Perda e Encontro de Jesus no Templo" },
  { title: "Segundo Mistério Gozozo", description: "Visita de Maria à sua prima Isabel." },
  { title: "Terceiro Mistério Gozozo", description: "Nascimento de Jesus Cristo em Belém." },
  { title: "Quarto Mistério Gozozo", description: "Apresentação do Menino Jesus no Templo." },
  { title: "Quinto Mistério Gozozo", description: "Encontro de Jesus no Templo, depois de ter sido perdido pelos seus pais." },
];

export default function TercoMariano() {
  const [selectedMisterio, setSelectedMisterio] = useState(null);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-gray-800 overflow-hidden p-6">
      <img
        src="/virgn-mary.jpeg"
        alt="Virgem Maria"
        className="absolute inset-0 object-cover w-full opacity-20"
      />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Rosário</h1>
        <p className="text-center mb-6">Clique nos mistérios para refletir e rezar.</p>

        <div className="flex flex-wrap justify-center gap-4">
          {misterios.map((misterio, index) => (
            <motion.button
              key={index}
              className="bg-white shadow-lg rounded-xl p-4 w-40 h-40 flex flex-col items-center justify-center hover:bg-blue-400 hover:text-white transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedMisterio(misterio)}
            >
              <GiPrayerBeads size={40} />
              <span className="mt-2 font-semibold">{misterio.title}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selectedMisterio && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMisterio(null)}
            >
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold mb-4">{selectedMisterio.title}</h2>
                <p className="text-gray-700 mb-4">{selectedMisterio.description}</p>

                <a
                  href="https://artsandculture.google.com/"
                  className="text-blue-500 underline hover:text-blue-700 block mb-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meditação com arte sacra
                </a>

                <button
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                  onClick={() => setSelectedMisterio(null)}
                >
                  Fechar
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <a href="/" className="mt-8 flex items-center gap-2 text-blue-700 hover:text-blue-800">
          <FaHome size={24} /> Voltar para Home
        </a>
      </div>
    </div>
  );
}
