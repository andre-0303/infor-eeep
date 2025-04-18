import Image from "next/image";

export default function Projetos() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-2 text-center mt-10">Alguns projetos dos alunos</h2>
      <div className="w-20 h-1 bg-[#1B09AF] mt-1 mb-6 rounded-full mx-auto"></div>

      {/* Imagens dos projetos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 px-4 md:px-6 justify-center">
        {/* Projeto 1 (Site da Escola) */}
        <div className="relative w-full sm:w-80 lg:w-96 h-64 sm:h-72 rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out mx-auto">
          <Image
            src="/projeto1.png"
            alt="Projeto 1"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
            <p className="text-white text-sm md:text-base font-semibold">Site da Escola Deputado José Maria Melo</p>
          </div>
        </div>

        {/* Projeto 2 */}
        <div className="relative w-full sm:w-80 lg:w-96 h-64 sm:h-72 rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out mx-auto">
          <Image
            src="/projeto2.jpg"
            alt="Projeto 2"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
            <p className="text-white text-sm md:text-base font-semibold">Práticas com Arduino</p>
          </div>
        </div>
      </div>

      {/* Segunda linha de imagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 px-4 md:px-6 justify-center">
        {/* Projeto 3 */}
        <div className="relative w-full sm:w-80 lg:w-96 h-64 sm:h-72 rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out mx-auto">
          <Image
            src="/projeto3.jpg"
            alt="Projeto 3"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
            <p className="text-white text-sm md:text-base font-semibold">Projetos com programação</p>
          </div>
        </div>

        {/* Projeto 4 */}
        <div className="relative w-full sm:w-80 lg:w-96 h-64 sm:h-72 rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out mx-auto">
          <Image
            src="/img4.png"
            alt="Projeto 4"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
            <p className="text-white text-sm md:text-base font-semibold">Manuntenção de Computadores</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h4 className="text-3xl font-bold mb-2">Repositório do curso no Github:</h4>
        <a
          href="https://github.com/ti-eeepdjmm"
          className="text-blue-500 hover:underline"
        >
          Link para o GitHub
        </a>
        <div className="w-20 h-1 bg-[#1B09AF] mt-1 mb-4 rounded-full mx-auto"></div>
      </div>
    </>
  );
}
