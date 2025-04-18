'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <Image src="/download.png" alt="Logo Curso" width={60} height={60} />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/sobre" className="hover:text-gray-300">Sobre</Link>
          <Link href="/disciplinas" className="hover:text-gray-300">Disciplinas</Link>
          <Link href="/projetos" className="hover:text-gray-300">Projetos</Link>
          <Link href="/contatos" className="hover:text-gray-300">Contato</Link>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label="Menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-blue-800 px-4 pb-4 space-y-2 text-sm font-medium flex items-end flex-col">
          <Link href="/sobre" className="block text-white hover:text-gray-300">Sobre</Link>
          <Link href="/disciplinas" className="block text-white hover:text-gray-300">Disciplinas</Link>
          <Link href="/projetos" className="block text-white hover:text-gray-300">Projetos</Link>
          <Link href="/contatos" className="block text-white hover:text-gray-300">Contato</Link>
        </nav>
      )}
    </header>
  );
}
