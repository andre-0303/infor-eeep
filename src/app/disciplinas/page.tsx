import Image from "next/image";

export default function Materias() {
  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-2 mt-4 text-start">Disciplinas do Curso Técnico em Informática</h2>
    <div className="w-20 h-1 bg-[#1B09AF] mt-1 mb-6 rounded-full"></div>

        <p className="font-normal text-1xl mb-6">
          O curso é estruturado em três anos, cada um com disciplinas
          específicas que combinam teoria e prática. O objetivo é
          preparar o aluno de forma progressiva para os desafios do
          mercado de trabalho, com uma base sólida desde os fundamen-
          tos até a aplicação prática em projetos reais e estágio.
        </p>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        <h3 className="text-2xl font-semibold mb-4">1º Ano – Fundamentos da Informática e Desenvolvimento Pessoal</h3>
        
        <div className="flex space-x-4 mb-6">
          <Image
            src="/1ano.png"
            alt="Alunos em aula"
            width={600}
            height={400}
            className="rounded-xl w-1/2 h-auto object-cover"
          />
          <Image
            src="/1anofinal.jpg"
            alt="Alunos em aula"
            width={600}
            height={400}
            className="rounded-xl w-1/2 h-auto object-cover"
          />
        </div>

        <ul className="list-disc pl-5 space-y-4">
          <li>
            <h4 className="font-semibold">Lógica de Programação</h4>
            <p>Aprenda os conceitos básicos da lógica computacional e desenvolva sua capacidade de resolver problemas com algoritmos.</p>
          </li>
          <li>
            <h4 className="font-semibold">HTML/CSS</h4>
            <p>Conheça as linguagens essenciais da construção de sites e interfaces web.</p>
          </li>
          <li>
            <h4 className="font-semibold">Gestão de Startups</h4>
            <p>Introdução ao empreendedorismo digital e à criação de negócios inovadores na área de tecnologia.</p>
          </li>
          <li>
            <h4 className="font-semibold">Planejamento de Carreira</h4>
            <p>Desenvolva habilidades socioemocionais, autoconhecimento e planejamento profissional para o futuro.</p>
          </li>
        </ul>
      </div>
      <div className="max-w-4xl mx-auto p-4">
        <h3 className="text-2xl font-semibold mb-4">2º Ano – Programação, Sistemas e Infraestrutura</h3>
        
        <div className="flex space-x-4 mb-6">
          <Image
            src="/2ano.jpg"
            alt="Alunos em aula"
            width={600}
            height={400}
            className="rounded-xl w-1/2 h-auto object-cover "
          />
        </div>

        <ul className="list-disc pl-5 space-y-4">
          <li>
            <h4 className="font-semibold">Programação Web</h4>
            <p>Aprenda a desenvolver aplicações web dinâmicas e 
            interativas.</p>
          </li>
          <li>
            <h4 className="font-semibold">Noções de Robótica</h4>
            <p>Conheça as linguagens essenciais da construção de sites e interfaces web.</p>
          </li>
          <li>
            <h4 className="font-semibold">Gestão de Startups</h4>
            <p>Introdução ao empreendedorismo digital e à criação de negócios inovadores na área de tecnologia.</p>
          </li>
          <li>
            <h4 className="font-semibold">Planejamento de Carreira</h4>
            <p>Desenvolva habilidades socioemocionais, autoconhecimento e planejamento profissional para o futuro.</p>
          </li>
        </ul>
      </div>
      <div className="max-w-4xl mx-auto p-4">
        <h3 className="text-2xl font-semibold mb-4">1º Ano – Fundamentos da Informática e Desenvolvimento Pessoal</h3>
        
        {/* Layout das Imagens */}
        <div className="flex space-x-4 mb-6">
          <Image
            src="/1ano.png"
            alt="Alunos em aula"
            width={600}
            height={400}
            className="rounded-xl w-1/2 h-auto object-cover"
          />
          <Image
            src="/1anofinal.jpg"
            alt="Alunos em aula"
            width={600}
            height={400}
            className="rounded-xl w-1/2 h-auto object-cover"
          />
        </div>

        <ul className="list-disc pl-5 space-y-4">
          <li>
            <h4 className="font-semibold">Lógica de Programação</h4>
            <p>Aprenda os conceitos básicos da lógica computacional e desenvolva sua capacidade de resolver problemas com algoritmos.</p>
          </li>
          <li>
            <h4 className="font-semibold">HTML/CSS</h4>
            <p>Conheça as linguagens essenciais da construção de sites e interfaces web.</p>
          </li>
          <li>
            <h4 className="font-semibold">Gestão de Startups</h4>
            <p>Introdução ao empreendedorismo digital e à criação de negócios inovadores na área de tecnologia.</p>
          </li>
          <li>
            <h4 className="font-semibold">Planejamento de Carreira</h4>
            <p>Desenvolva habilidades socioemocionais, autoconhecimento e planejamento profissional para o futuro.</p>
          </li>
        </ul>
      </div>
    </>
  );
}
