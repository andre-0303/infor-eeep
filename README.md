# Curso Técnico em Informática - EEEP Deputado José Maria Melo

Bem-vindo ao repositório oficial do **Curso Técnico em Informática** da **Escola Estadual de Educação Profissional Deputado José Maria Melo**, localizada em Guaraciaba do Norte, Ceará. Este projeto é o site oficial do curso, desenvolvido pelos alunos e professores para divulgar informações sobre o curso, disciplinas, projetos e formas de contato.

## Sobre o Projeto

Este site foi criado com o objetivo de apresentar o **Curso Técnico em Informática** oferecido pela EEEP Deputado José Maria Melo. Ele destaca:

- **Informações sobre o curso**: Objetivos, grade curricular e metodologia de ensino.
- **Disciplinas**: Detalhamento das matérias ao longo dos três anos do curso.
- **Projetos**: Exemplos de projetos desenvolvidos pelos alunos, como o próprio site, práticas com Arduino e manutenção de computadores.
- **Contato**: Informações de endereço, e-mail, telefone e redes sociais para comunicação com a escola.

O site foi construído utilizando **Next.js** com **React** e estilizado com **Tailwind CSS**, garantindo uma interface moderna, responsiva e acessível.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **Lucide React**: Biblioteca de ícones para elementos visuais.
- **Vercel**: Plataforma de deploy utilizada para hospedagem do site.

## Estrutura do Projeto

O projeto está organizado em componentes principais que representam as seções do site:

- **Navbar**: Barra de navegação responsiva com links para as páginas principais.
- **Banner**: Seção inicial com imagem de destaque e mensagem introdutória.
- **SobreCurso**: Informações gerais sobre o curso técnico.
- **Carrousel**: Carrossel de imagens mostrando atividades do curso.
- **Sobre**: Detalhamento dos objetivos, grade curricular e infraestrutura.
- **Materias**: Lista de disciplinas divididas por ano do curso.
- **Projetos**: Galeria de projetos realizados pelos alunos.
- **Contatos**: Informações de contato e links para redes sociais.
- **Footer**: Rodapé com informações adicionais e links para redes sociais.

### Estrutura de Arquivos

```
├── components/
│   ├── Banner.jsx
│   ├── Carrousel.jsx
│   ├── Contatos.jsx
│   ├── Footer.jsx
│   ├── Materias.jsx
│   ├── Navbar.jsx
│   ├── Projetos.jsx
│   ├── Sobre.jsx
│   ├── SobreCurso.jsx
├── public/
│   ├── images/
│   │   ├── banner.jpg
│   │   ├── sobre_curso.jpg
│   │   ├── projeto1.png
│   │   ├── ...
├── styles/
│   ├── carrosel.css
├── pages/
│   ├── index.jsx
│   ├── sobre.jsx
│   ├── disciplinas.jsx
│   ├── projetos.jsx
│   ├── contatos.jsx
├── package.json
├── README.md
```

## Como Executar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/andre-0303/infor-eeep.git
   ```

2. **Acesse o diretório do projeto**:

   ```bash
   cd curso-informatica
   ```

3. **Instale as dependências**:

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

5. **Acesse o site**: Abra o navegador e vá para `http://localhost:3000`.

## Deploy

O site está hospedado na **Vercel** e pode ser acessado em: [https://infor-eeep.vercel.app/].

## Contribuição

Este projeto é mantido pelos alunos e professores do Curso Técnico em Informática. Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Envie para o repositório remoto (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

© 2025 Bandeira Dev
