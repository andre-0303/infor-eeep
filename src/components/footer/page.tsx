import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#002685] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        {/* Redes sociais */}
        <div>
          <h3 className="font-semibold text-sm mb-2">Siga-nos:</h3>
          <div className="flex gap-3 mb-4">
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-300">
              <Youtube size={20} />
            </a>
          </div>
          <p className="text-sm">© Curso Técnico em Informática 2025</p>
          <p className="text-sm">Todos os direitos reservados.</p>
        </div>

        {/* Endereço */}
        <div>
          <h3 className="font-semibold text-sm mb-2">Endereço</h3>
          <p className="text-sm">Avenida Tenente Matias S/N, CE-187</p>
          <p className="text-sm">CEP: 62380-000, Guaraciaba do Norte - CE</p>
          <p className="text-sm">
            e-mail: <a href="mailto:eeepdepjosemaria.cr05@escola.ce.gov.br" className="underline">eeepdepjosemaria.cr05@escola.ce.gov.br</a>
          </p>
          <p className="text-sm mt-1">Desenvolvido pelo curso de Informática</p>
        </div>
      </div>
    </footer>
  );
}
