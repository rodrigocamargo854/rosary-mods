"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { GiPrayerBeads } from "react-icons/gi";
import Image from 'next/image';

import Link from 'next/link';
const misterios = [
  { title: "Primeiro Mistério Gozozo", description: "Anunciação, a Visitação, o Nascimento, a Apresentação de Jesus no Templo e a Perda e Encontro de Jesus no Templo", link: "https://pt.wikipedia.org/wiki/Anuncia%C3%A7%C3%A3o#/media/Ficheiro:Botticelli,_annunciazione_del_Metropolitan.jpg" },
  { title: "Segundo Mistério Gozozo", description: "Visita de Maria à sua prima Isabel.", link: "https://i.pinimg.com/736x/47/c9/77/47c97799a3b452ff9b2e98ceccc7474e.jpg "},
  { title: "Terceiro Mistério Gozozo", description: "Nascimento de Jesus em Belém.", link: "https://artsandculture.google.com/story/cQVRNq_xJ9xhvw?hl=pt-BR" },
  { title: "Quarto Mistério Gozozo", description: "Apresentação do Menino Jesus no Templo.", link: "https://pt.wikipedia.org/wiki/Apresenta%C3%A7%C3%A3o_de_Jesus_no_Templo#/media/Ficheiro:Symeon_i_Nikolai_kyrka.jpg" },
  { title: "Quinto Mistério Gozozo", description: "O encontro de Jesus no Templo, após ser perdido pelos pais.", link: "https://en.wikipedia.org/wiki/Finding_in_the_Temple#/media/File:Disputa_con_los_doctores_(El_Veron%C3%A9s)_grande.jpg" },
];

export default function TercoMariano() {
  const [selectedMisterio, setSelectedMisterio] = useState(null);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-gray-800 overflow-hidden p-6">
      <Image
  src="/virgn-mary.jpeg"
  alt="Virgem Maria"
  fill
  className="absolute inset-0 object-cover opacity-20"
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
              className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMisterio(null)}
            >
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold mb-2">{selectedMisterio.title}</h2>
                <p className="text-gray-700 mb-4">{selectedMisterio.description}</p>

                <a
                  href={selectedMisterio.link}
                  className="text-blue-500 underline hover:text-blue-700 block mb-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meditação completa
                </a>

                <button
                  className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                  onClick={() => setSelectedMisterio(null)}
                >
                  Fechar
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Link href="/" className="mt-8 flex items-center gap-2 text-blue-700 hover:text-blue-800">
  <FaHome size={24} /> Voltar para Home
</Link>
      </div>
    </div>
  );
}
