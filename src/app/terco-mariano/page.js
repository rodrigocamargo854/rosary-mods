"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { GiPrayerBeads } from "react-icons/gi";
import Image from 'next/image';
import Link from 'next/link';

const misterios = [
  {
    grupo: "Mistérios Gozosos", misterios: [
      { title: "Primeiro Mistério Gozozo", description: "Anunciação, a Visitação, o Nascimento, a Apresentação de Jesus no Templo e a Perda e Encontro de Jesus no Templo", link: "https://pt.wikipedia.org/wiki/Anuncia%C3%A7%C3%A3o#/media/Ficheiro:Botticelli,_annunciazione_del_Metropolitan.jpg" },
      { title: "Segundo Mistério Gozozo", description: "Visita de Maria à sua prima Isabel.", link: "https://i.pinimg.com/736x/47/c9/77/47c97799a3b452ff9b2e98ceccc7474e.jpg " },
      { title: "Terceiro Mistério Gozozo", description: "Nascimento de Jesus em Belém.", link: "https://artsandculture.google.com/story/cQVRNq_xJ9xhvw?hl=pt-BR" },
      { title: "Quarto Mistério Gozozo", description: "Apresentação do Menino Jesus no Templo.", link: "https://pt.wikipedia.org/wiki/Apresenta%C3%A7%C3%A3o_de_Jesus_no_Templo#/media/Ficheiro:Symeon_i_Nikolai_kyrka.jpg" },
      { title: "Quinto Mistério Gozozo", description: "O encontro de Jesus no Templo, após ser perdido pelos pais.", link: "https://en.wikipedia.org/wiki/Finding_in_the_Temple#/media/File:Disputa_con_los_doctores_(El_Veron%C3%A9s)_grande.jpg" },
    ]
  },
  {
    grupo: "Mistérios Luminosos", misterios: [
      { title: "1º Mistério Luminoso", description: "Batismo de Jesus no Rio Jordão.",link: "https://artsandculture.google.com/asset/batismo-de-jesus-almeida-j%C3%BAnior/DQFbX2vqOV9mNg?hl=en" },
      { title: "2º Mistério Luminoso", description: "Milagre nas Bodas de Caná.",link: "https://artsandculture.google.com/asset/the-wedding-at-cana-paolo-veronese-byname-of-paolo-caliari-1528-1588-paris-mus%C3%A9e-du-louvre/7AEwlrXUn2yPcw?hl=en" },
      { title: "3º Mistério Luminoso", description: "Anúncio do Reino e convite à conversão.",link:"https://pt.wikipedia.org/wiki/Serm%C3%A3o_da_Montanha#/media/Ficheiro:Bloch-SermonOnTheMount.jpg"},
      { title: "4º Mistério Luminoso", description: "Transfiguração de Jesus.",link:"https://pt.wikipedia.org/wiki/Transfiguração_(Rafael)#/media/Ficheiro:Transfiguration_Raphael.jpg" },
      { title: "5º Mistério Luminoso", description: "Instituição da Eucaristia.",Link: "https://pt.wikipedia.org/wiki/Transfiguração_(Rafael)#/media/Ficheiro:Transfiguration_Raphael.jpg"},
    ]
  },
  {
    grupo: "Mistérios Dolorosos", misterios: [
      { title: "1º Mistério Doloroso", description: "Agonia de Jesus no Jardim das Oliveiras." },
      { title: "2º Mistério Doloroso", description: "Flagelação de Jesus." },
      { title: "3º Mistério Doloroso", description: "Coroação de espinhos." },
      { title: "4º Mistério Doloroso", description: "Jesus carrega a cruz para o Calvário." },
      { title: "5º Mistério Doloroso", description: "Crucificação e morte de Jesus." },
    ]
  },
  {
    grupo: "Mistérios Gloriosos", misterios: [
      { title: "1º Mistério Glorioso", description: "Ressurreição de Jesus." },
      { title: "2º Mistério Glorioso", description: "Ascensão de Jesus aos céus." },
      { title: "3º Mistério Glorioso", description: "Vinda do Espírito Santo sobre Maria e os Apóstolos." },
      { title: "4º Mistério Glorioso", description: "Assunção de Maria aos céus." },
      { title: "5º Mistério Glorioso", description: "Coroação de Nossa Senhora como Rainha do céu e da terra." },
    ]
  },
];

export default function Rosario() {
  const [selectedMisterio, setSelectedMisterio] = useState(null);

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
        <h1 className="text-4xl font-bold mb-4">Rosário</h1>
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
                <h2 className="text-2xl font-bold mb-2">{selectedMisterio.title}</h2>
                <p className="text-gray-700 mb-4">{selectedMisterio.description}</p>
                <a
                  href={selectedMisterio.link || "#"}
                  target="_blank"
                  className="text-blue-500 underline hover:text-blue-700 block mb-4"
                >
                  Meditação com Arte Sacra
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

        <Link href="/" className="mt-8 flex items-center gap-2 text-blue-700 hover:text-blue-800">
          <FaHome size={24} /> Voltar para Home
        </Link>
      </div>
    </div>
  );
}
