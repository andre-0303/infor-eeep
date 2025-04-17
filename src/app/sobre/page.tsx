import Image from "next/image"

export default function Sobre() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-2">Objetivos do Curso</h2>
        <div className="w-20 h-1 bg-[#1B09AF] mt-1 mb-4 rounded-full"></div>
          <p className="font-normal leading-relaxed text-justify">
            O Curso Técnico em Informática da EEEP Deputado José Maria Melo tem como objetivo formar profissionais 
            capazes de atuar com competência nas áreas de desenvolvimento de sistemas, suporte técnico e redes
            de computadores. Busca-se proporcionar aos alunos uma base sólida de conhecimento técnico e teórico, 
            além de estimular o pensamento crítico e a resolução de problemas do mundo real com o uso da tecnologia.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image src='/pessoas.jpg' alt="Alunos em aula" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold">Grade Curricular</h2>
        <div className="w-20 h-1 bg-[#1B09AF] mt-2 mb-6 rounded-full"></div>
        <p className="mb-6">A grade curricular é composta por disciplinas teóricas e práticas, que abrangem:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="list-disc list-inside space-y-1">
            <li>Lógica de Programação</li>
            <li>HTML/CSS</li>
            <li>Gestão de Startups</li>
            <li>Planejamento de Carreira</li>
            <li>Programação Web</li>
            <li>Noções de Robótica</li>
            <li>Programação Orientada a Objetos</li>
            <li>Sistemas Operacionais</li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            <li>Banco de Dados</li>
            <li>Design Gráfico</li>
            <li>Gerenciador de Conteúdos</li>
            <li>Redes de Computadores</li>
            <li>Laboratório de Software</li>
            <li>Laboratório de Hardware</li>
            <li>Projeto Integrador</li>
            <li>Preparação e avaliação prática de estágio</li>
          </ul>
        </div>
      </div>
  
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-2">Metodologia de Ensino e Infraestrutura</h2>
        <div className="w-20 h-1 bg-[#1B09AF] mt-1 mb-4 rounded-full"></div>
          <p className="font-normal leading-relaxed text-justify mb-4">
            A metodologia é centrada no aluno, com foco em práticas reais e resolução de desafios. As aulas 
            combinam teoria e prática em laboratórios, projetos em equipe, simulações, e uso de plataformas digitais. 
            Também são realizadas feiras, oficinas e exposições de projetos para estimular o empreendedorismo, a 
            criatividade e a inovação.
          </p>
          <p className="font-normal leading-relaxed text-justify">
            A escola conta com laboratórios modernos de informática, equipados com computadores atualizados, internet 
            de alta velocidade, servidores para simulações de rede, e equipamentos multimídia. Há ainda salas 
            climatizadas, biblioteca, área de convivência, auditório e ambientes propícios ao desenvolvimento técnico e 
            pessoal dos alunos.
          </p>
        </div>
        <div className="md:w-1/2">
            <Image
                src='/ensinando.png'
                alt="Metodologia"
                width={400}
                height={300}
                className="rounded-xl w-full h-auto object-cover max-h-[400px] max-w-[550px]"
            />
        </div>

      </div>
    </div>
  )
}
