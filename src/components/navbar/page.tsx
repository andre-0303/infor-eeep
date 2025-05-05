'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Sobre", href: "/sobre" },
    { label: "Disciplinas", href: "/disciplinas" },
    { label: "Projetos", href: "/projetos" },
    { label: "Contato", href: "/contatos" },
  ];

  return (
    <>
      <header className="bg-blue-800 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <Image src="/download.png" alt="Logo Curso" width={60} height={60} />
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {links.map((link, index) => (
              <Link key={index} href={link.href} className="hover:text-gray-300">
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white"
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <>
          <div className="fixed top-0 right-0 w-2/3 h-full bg-blue-900 z-50 p-6 flex flex-col">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white self-end mb-6"
              aria-label="Fechar menu"
            >
              <X size={28} />
            </button>

            <nav className="flex flex-col gap-6 text-white text-lg">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-gray-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Overlay */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          />
        </>
      )}
    </>
  );
}
