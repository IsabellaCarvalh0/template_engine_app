# 📚 Livraria com Template Engine (Node.js + EJS)

Aplicação web simples de uma livraria, feita com **Node.js puro** (módulo `http`) e **EJS** como template engine. O projeto mostra, na prática, como gerar páginas HTML dinâmicas no servidor a partir de dados em JavaScript, reaproveitando um único template para vários livros.

> Projeto desenvolvido para fins de estudo.

## Funcionalidades

- **Página inicial (`/`)**: lista todos os livros com título, autor, preço e link para os detalhes.
- **Página de detalhes (`/livro?id=1`)**: exibe capa, título, autor, preço, quantidade em estoque, selo de promoção e disponibilidade.
- **Servidor de imagens (`/imagens/...`)**: entrega as capas dos livros direto pelo servidor Node.
- **Tratamento de erros**: respostas 404 para livros, imagens e páginas inexistentes.

## Tecnologias

- [Node.js](https://nodejs.org/)
- [EJS](https://ejs.co/) (Embedded JavaScript Templates)
- Módulos nativos: `http`, `fs`, `url` e `path`

## 📁 Estrutura do projeto

```
template_engine_app/
├── imagens/            # capas dos livros
├── views/
│   ├── livros.ejs      # template da lista de livros
│   └── livro.ejs       # template da página de detalhes
├── package.json
└── server.js           # servidor HTTP e rotas
```

## Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior recomendada)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git

# 2. Entre na pasta do projeto
cd NOME-DO-REPOSITORIO

# 3. Instale as dependências
npm install

# 4. Inicie o servidor
node server.js
```

Depois, acesse no navegador: **http://localhost:3000**

## Rotas

| Rota                | Descrição                                   |
| ------------------- | ------------------------------------------- |
| `/`                 | Lista todos os livros                       |
| `/livro?id={id}`    | Mostra os detalhes de um livro específico   |
| `/imagens/{arquivo}`| Serve as capas dos livros                   |

## Conceitos praticados

- Servidor HTTP com o módulo nativo do Node.js
- Template engines e renderização dinâmica de HTML no servidor
- Tags do EJS: `<% %>`, `<%= %>` e `<%- %>`
- Laços (`forEach`) e condicionais (`if/else`) dentro de templates
- Query parameters e leitura de URL com o módulo `url`
- Busca de dados em arrays com `find`
- Leitura de arquivos com `fs` e entrega de arquivos estáticos (imagens) com o `Content-Type` correto
- Formatação de valores monetários com `toFixed` e `replace`

## Possíveis melhorias

- Migrar para o Express
- Buscar os livros em um banco de dados
- Adicionar CSS para estilizar as páginas
- Criar partials EJS para reaproveitar cabeçalho e rodapé
- Implementar busca e filtros (por autor, promoção, disponibilidade)

## 👤 Autor

Feito por **Isabella Carvalho**
