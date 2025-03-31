"use client";

import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { GiPrayerBeads } from "react-icons/gi";
import Image from 'next/image';
import Link from 'next/link';

const misterios = [
  {
    grupo: "(segunda-feira)",
    misterios: [
      { title: "1ª Jaculatória", description: "Jesus, me ajuda" },
      { title: "2ª Jaculatória", description: "Jesus, me cura" },
      { title: "3ª Jaculatória", description: "Eu te amo, Jesus" },
      { title: "4ª Jaculatória", description: "Fica comigo, Jesus" },
      { title: "5ª Jaculatória", description: "Obrigado, Senhor" },
    ]
  },
  {
    grupo: "(terça-feira)",
    misterios: [
      { title: "1ª Jaculatória", description: "Senhor Jesus Cristo" },
      { title: "2ª Jaculatória", description: "Senhor Jesus Cristo, nesta terça-feira, liberta-me da depressão" },
      { title: "3ª Jaculatória", description: "Senhor Jesus Cristo, preenche todas as áreas da minha mente com teu Amor" },
      { title: "4ª Jaculatória", description: "Senhor Jesus Cristo, equilibra a minha mente" },
      { title: "5ª Jaculatória", description: "Obrigado, Senhor Jesus Cristo!" },
    ]
  },
  {
    grupo: "(sexta-feira)",
    misterios: [
      { title: "1ª Jaculatória", description: "Senhor Jesus Cristo" },
      { title: "2ª Jaculatória", description: "Senhor Jesus Cristo, nesta sexta-feira, abençoa meu trabalho e empreendimentos" },
      { title: "3ª Jaculatória", description: "Senhor Jesus Cristo, que eu possa me realizar no meu trabalho" },
      { title: "4ª Jaculatória", description: "Senhor Jesus Cristo, pelo teu Amor, que eu possa prosperar" },
      { title: "5ª Jaculatória", description: "Obrigado, Senhor Jesus Cristo!" },
    ]
  },
  {
    grupo: "(sábado)",
    misterios: [
      { title: "1ª Jaculatória", description: "Senhor Jesus Cristo" },
      { title: "2ª Jaculatória", description: "Senhor Jesus Cristo, neste sábado, liberta-me do esgotamento e do estresse" },
      { title: "3ª Jaculatória", description: "Senhor Jesus Cristo, que eu possa descansar neste final de semana" },
      { title: "4ª Jaculatória", description: "Senhor Jesus Cristo, reanima-me com teu amor" },
      { title: "5ª Jaculatória", description: "Obrigado, Senhor Jesus Cristo!" },
    ]
  }
];


export default function Rosario() {
  const [selectedMisterio, setSelectedMisterio] = useState(null);
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    if (selectedMisterio) {
      setProgresso(0);
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setProgresso(count);
        if (count >= 10) {
          clearInterval(interval);
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [selectedMisterio]);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-gray-800 overflow-hidden p-6">
      <Image
        src="/virgn-mary.jpeg"
        alt="Virgem Maria"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
      />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Terço Bizantino</h1>
        <p className="text-center mb-6">Clique nos mistérios para refletir e rezar.</p>

        {misterios.map((grupo, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-2xl font-semibold my-4 text-center">{grupo.grupo}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {grupo.misterios.map((misterio, index) => (
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
          </div>
        ))}

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
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-2xl font-bold mb-2">{selectedMisterio.title}</p>
                <p className="text-gray-700 text-lg mb-6">{selectedMisterio.description}</p>

                <div className="flex justify-center gap-2 mb-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${i < progresso ? "bg-blue-600" : "bg-gray-300"
                        }`}
                    />
                  ))}
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  Repetindo: {progresso} de 10
                </p>



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

        <Link href="/" className="mt-8 flex items-center gap-2 text-blue-700 hover:text-blue-800">
          <FaHome size={24} /> Voltar para Home
        </Link>
      </div>
    </div>
  );
}
