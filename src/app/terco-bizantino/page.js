import Image from 'next/image';
import Link from 'next/link';
import { FaHome } from "react-icons/fa";


export default function TercoBizantino() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 text-gray-900 p-6">
       <Link href="/" className="mt-8 flex items-center gap-2 text-blue-700 hover:text-blue-800">
          <FaHome size={24} /> Voltar para Home
        </Link>
      </div>
    );
  }
  