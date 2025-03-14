"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPrayingHands } from "react-icons/fa";
import { CiMedicalCross } from "react-icons/ci";
import { GiPrayerBeads } from "react-icons/gi"; 
import Image from "next/image";
export default function Home() {
  const [tercos] = useState([
    { name: "Terço Mariano", icon: <GiPrayerBeads />, link: "/terco-mariano" },
    
    { name: "Terço Bizantino", icon: <CiMedicalCross />, link: "/terco-bizantino" },
    { name: "Terço da Misericórdia", icon: <FaPrayingHands />, link: "/terco-misericordia" },
  ]);
  
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-purple-200 text-gray-900 p-6">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">Escolha um Terço</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        {tercos.map((terco, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all"
          >
            <div className="text-5xl text-blue-600 mb-4">{terco.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{terco.name}</h2>
            <Link
              href={terco.link}
              className="mt-2 text-blue-500 hover:underline text-lg"
            >
              Acessar
            </Link>
          </motion.div>
        ))}
      </div>
      <footer className="w-full py-4 mt-10 bg-blue-200 text-center text-gray-800 font-semibold flex flex-col items-center">
  <p>Visite também</p>
  <Link href="https://gochamaviva.org" className="text-blue-600 hover:underline flex flex-col items-center">
    <Image src="/logo-chamaviva.png" alt="Chamaviva" width={150} height={50} />
    Chamaviva.org
  </Link>
</footer>



    </div>
    
  );
}
