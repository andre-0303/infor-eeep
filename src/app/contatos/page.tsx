import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export default function Contatos() {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-4xl mx-auto px-6 py-12">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Entre em Contato</h1>
        <div className="w-20 h-1 bg-[#1B09AF] rounded-full" />
        </div>



      {/* Informações de Contato */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Endereço */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="text-[#1B09AF]" />
            <div>
              <h3 className="font-semibold text-lg">Endereço</h3>
              <p className="text-sm">Avenida Tenente Matias S/N, CE-187</p>
              <p className="text-sm">CEP: 62380-000</p>
              <p className="text-sm">Guaraciaba do Norte - CE</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-[#1B09AF]" />
            <div>
              <h3 className="font-semibold text-lg">E-mail</h3>
              <a
                href="mailto:eeepdepjosemaria.cr05@escola.ce.gov.br"
                className="text-sm text-blue-600 hover:underline"
              >
                eeepdepjosemaria.cr05@escola.ce.gov.br
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-[#1B09AF]" />
            <div>
              <h3 className="font-semibold text-lg">Telefone</h3>
              <p className="text-sm">(88) 3652-1299</p>
            </div>
          </div>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Redes Sociais</h3>
          <div className="flex gap-4 items-center">
            <a
              href="https://www.instagram.com/eeepdepjosemariamelo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B09AF] hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>

            <a
              href="https://www.facebook.com/eeepdepjosemariamelo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B09AF] hover:scale-110 transition-transform"
              aria-label="Facebook"
            >
              <Facebook size={28} />
            </a>

            <a
              href="https://www.youtube.com/channel/UCpD_tFJUdFzGic6wIYeLwWg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B09AF] hover:scale-110 transition-transform"
              aria-label="YouTube"
            >
              <Youtube size={28} />
            </a>
          </div>

          <p className="text-sm mt-6">
            Desenvolvido pelo <span className="font-semibold">Curso Técnico em Informática</span>
          </p>
        </div>
      </div>
    </section>
  );
}
