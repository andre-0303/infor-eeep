import Image from "next/image";

export default function Materias() {
  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-2 mt-4 text-start">
          Disciplinas do Curso Técnico em Informática
        </h2>
        <div className="w-20 h-1 bg-[#1B09AF] mt-1 mb-6 rounded-full"></div>

        <p className="font-normal text-1xl mb-6 text-start">
          O curso é estruturado em três anos, cada um com disciplinas específicas que combinam teoria e prática. O objetivo é preparar o aluno de forma progressiva para os desafios do mercado de trabalho, com uma base sólida desde os fundamentos até a aplicação prática em projetos reais e estágio.
        </p>
      </div>

      {/* 1º Ano */}
      <div className="max-w-4xl mx-auto p-4">
        <h3 className="text-2xl font-semibold mb-4 text-center">1º Ano – Fundamentos da Informática e Desenvolvimento Pessoal</h3>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <Image
            src="/1ano.png"
            alt="Alunos em aula"
            width={600}
            height={400}
            className="rounded-xl w-full md:w-1/2 h-auto object-cover"
          />
          <Image
            src="/1anofinal.jpg"
            alt="Alunos em aula"
            width={600}
            height={400}
            className="rounded-xl w-full md:w-1/2 h-auto object-cover"
          />
        </div>

        <ul className="list-disc pl-5 space-y-4 text-start">
          <li>
            <h4 className="font-semibold">Lógica de Programação</h4>
            <p>Aprenda os conceitos básicos da lógica computacional e desenvolva sua capacidade de resolver problemas com algoritmos.</p>
          </li>
          <li>
            <h4 className="font-semibold">HTML/CSS</h4>
            <p>Conheça as linguagens essenciais da construção de sites e interfaces web.</p>
          </li>
          <li>
            <h4 className="font-semibold">Arquitetura e Manutenção de Computadores</h4>
            <p>Aprender sobre os componentes de um computador assim como a montagem e desmontagem dele.</p>
          </li>
          <li>
            <h4 className="font-semibold">Planejamento de Carreira</h4>
            <p>Desenvolva habilidades socioemocionais, autoconhecimento e planejamento profissional para o futuro.</p>
          </li>
        </ul>
      </div>

      {/* 2º Ano */}
      <div className="max-w-4xl mx-auto p-4">
        <h3 className="text-2xl font-semibold mb-4 text-center mt-8">2º Ano – Programação, Sistemas e Infraestrutura</h3>

        <div className="mb-6">
          <Image
            src="/2ano.jpg"
            alt="Alunos em aula"
            width={350}
            height={450}
            className="rounded-xl w-full max-w-[450px] mx-auto h-auto object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-start">
          <ul className="list-disc pl-5 space-y-4">
            <li>
              <h4 className="font-semibold">Programação Web</h4>
              <p>Aprenda a desenvolver aplicações web dinâmicas e interativas.</p>
            </li>
            <li>
              <h4 className="font-semibold">Noções de Robótica</h4>
              <p>Conheça os princípios básicos da robótica e automação.</p>
            </li>
            <li>
              <h4 className="font-semibold">Programação Orientada a Objetos</h4>
              <p>Aprofunde-se nos conceitos modernos de programação com foco em reutilização de código e organização.</p>
            </li>
            <li>
              <h4 className="font-semibold">Sistemas Operacionais</h4>
              <p>Entenda como funcionam os sistemas que gerenciam os recursos dos computadores.</p>
            </li>
            <li>
            <h4 className="font-semibold">Gestão de Startups</h4>
            <p>Introdução ao empreendedorismo digital e à criação de negócios inovadores na área de tecnologia.</p>
          </li>
          </ul>

          <ul className="list-disc pl-5 space-y-4">
            <li>
              <h4 className="font-semibold">Banco de Dados</h4>
              <p>Aprenda a modelar, criar e gerenciar bancos de dados relacionais.</p>
            </li>
            <li>
              <h4 className="font-semibold">Design Gráfico</h4>
              <p>Explore ferramentas de design para criação de interfaces, logotipos e peças digitais.</p>
            </li>
            <li>
              <h4 className="font-semibold">Gerenciador de Conteúdos</h4>
              <p>Conheça plataformas como WordPress para criação e manutenção de sites com CMS.</p>
            </li>
            <li>
              <h4 className="font-semibold">Redes de Computadores</h4>
              <p>Estude os princípios de comunicação entre computadores e montagem de redes.</p>
            </li>
          </ul>
        </div>
      </div>

      {/* 3º Ano */}
      <div className="max-w-4xl mx-auto p-4 mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-center mt-8">3º Ano – Prática Profissional e Integração de Conhecimentos</h3>

        <div className="mb-6">
        <Image
          src="/3ano.png"
          alt="Alunos"
          width={350}
          height={550}
          className="rounded-xl w-full max-w-[450px] mx-auto h-auto object-cover"
        />

        </div>

        <ul className="list-disc pl-5 space-y-4 text-start ">
          <li>
            <h4 className="font-semibold">Laboratório de Software</h4>
            <p>Desenvolvimento de sistemas completos com base nos conhecimentos adquiridos.</p>
          </li>
          <li>
            <h4 className="font-semibold">Laboratório de Hardware</h4>
            <p>Conheça as linguagens essenciais da construção de sites e interfaces web.</p>
          </li>
          <li>
            <h4 className="font-semibold">Projeto Integrador</h4>
            <p>Desenvolvimento de um projeto final unindo todas as áreas do curso com apresentação pública.</p>
          </li>
          <li>
            <h4 className="font-semibold">Preparação e Avaliação Prática de Estágio</h4>
            <p>Orientações e avaliações para inserção no ambiente de trabalho com foco na atuação técnica.</p>
          </li>
        </ul>
      </div>
    </>
  );
}
