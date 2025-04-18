
# Curso Técnico em Informática - EEEP Deputado José Maria Melo

Bem-vindo ao repositório oficial do **Curso Técnico em Informática** da **Escola Estadual de Educação Profissional Deputado José Maria Melo**, localizada em Guaraciaba do Norte, Ceará.

Este projeto é o site institucional do curso, desenvolvido por alunos e professores, com o objetivo de divulgar informações sobre a formação, disciplinas, projetos e formas de contato.

---

## 📘 Sobre o Projeto

O site foi desenvolvido utilizando **Next.js** com suporte a **Tailwind CSS**, oferecendo uma experiência moderna, responsiva e acessível.

### Principais seções do site:

- **Informações sobre o curso**: objetivos, estrutura, metodologia de ensino.
- **Disciplinas**: grade curricular dividida por anos.
- **Projetos**: iniciativas dos alunos, como práticas com Arduino e manutenção de computadores.
- **Contato**: informações de endereço, telefone, redes sociais e mais.

---

## 🚀 Tecnologias Utilizadas

- **Next.js** (versão canary)
- **React**
- **Tailwind CSS**
- **Lucide React** (ícones)
- **Vercel** (deploy e hospedagem)

---

## 📁 Estrutura de Pastas

```bash
src/
├── app/
│   ├── page.tsx                # Página inicial
│   ├── layout.tsx              # Layout base do app
│   ├── globals.css             # Estilos globais
│   ├── contatos/
│   │   └── page.tsx            # Página de Contato
│   ├── disciplinas/
│   │   └── page.tsx            # Página de Disciplinas
│   ├── projetos/
│   │   └── page.tsx            # Página de Projetos
│   ├── sobre/
│   │   └── page.tsx            # Página Sobre o curso
├── components/
│   ├── banner/
│   │   └── page.tsx
│   ├── carrousel/
│   │   ├── page.tsx
│   │   └── carrossel.css
│   ├── footer/
│   │   └── page.tsx
│   ├── navbar/
│   │   └── page.tsx
│   ├── sobre_curso/
│   │   └── page.tsx
├── public/
│   └── logo.png                # Logotipo da escola/curso
```

---

## 🧪 Como Executar o Projeto Localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/infor-eeep.git
```

2. **Acesse o diretório do projeto:**

```bash
cd infor-eeep
```

3. **Instale as dependências:**

```bash
npm install
```

4. **Execute o projeto em ambiente de desenvolvimento:**

```bash
npm run dev
```

5. **Abra o navegador e acesse:**

```
http://localhost:3000
```

---

## 🌐 Deploy

O projeto está disponível em produção via **Vercel**:

🔗 [https://infor-eeep.vercel.app](https://infor-eeep.vercel.app)

---

## 🤝 Contribuições

Contribuições são bem-vindas! Siga os passos abaixo:

1. Fork este repositório.
2. Crie uma branch com sua feature ou correção:
   ```bash
   git checkout -b feature/nova-feature
   ```
3. Faça o commit das suas alterações:
   ```bash
   git commit -m "feat: adiciona nova feature"
   ```
4. Envie para o seu repositório remoto:
   ```bash
   git push origin feature/nova-feature
   ```
5. Abra um Pull Request.

---

## 📄 Licença

© 2025 Bandeira Dev — Todos os direitos reservados.
