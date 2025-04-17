import Image from "next/image";

export default function SobreCurso() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-4 md:p-8">
      <div className="md:w-1/2 w-full max-w-[90%] mx-auto md:mx-0">
        <h2 className="text-3xl font-bold mb-2">Sobre o Curso</h2>
        <div className="w-20 h-1 bg-[#1B09AF] mt-1 mb-4 rounded-full"></div>
        <p className="text-sm md:text-lg leading-normal md:leading-relaxed text-justify">
          A E.E.E.P. Deputado José Maria Melo oferece o Curso Técnico em 
          Informática, que visa formar profissionais qualificados para atuar 
          na área de tecnologia da informação. O curso combina teoria e 
          prática, proporcionando aos alunos uma sólida base de conhecimentos 
          em sistemas computacionais, redes de computadores, desenvolvimento 
          de softwares e manutenção de equipamentos.
        </p>
      </div>

      <div className="md:w-1/2 w-full">
        <div className="relative w-full h-60 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/sobre_curso.jpg"
            alt="Sobre Curso"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
