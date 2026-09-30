const http = require("http");
const fs = require("fs");
const ejs = require("ejs");
const url = require("url");
const path = require("path");

const livros = [
  { id: 1, titulo: "Clean Code", autor: "Robert C. Martin", preco: 89.90, quantidade: 5, promocao: true, imagem: "/imagens/cleanCode-imagem.jpg" },
  { id: 2, titulo: "O Hobbit", autor: "J. R. R. Tolkien", preco: 49.90, quantidade: 7, promocao: false, imagem: "/imagens/oHobbit-imagem.webp" },
  { id: 3, titulo: "1984", autor: "George Orwell", preco: 39.90, quantidade: 0, promocao: false, imagem: "/imagens/1984-imagem.jpg" }
];

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true);

  if (urlInfo.pathname === "/") {
    const template = fs.readFileSync("./views/livros.ejs", "utf-8");
    const html = ejs.render(template, { livros });

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(html);

  } else if (urlInfo.pathname === "/livro") {
    const id = Number(urlInfo.query.id);
    const livro = livros.find(livro => livro.id === id);

    if (!livro) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end("<h1>Livro não encontrado</h1><a href='/'>Voltar</a>");
      return;
    }

    const template = fs.readFileSync("./views/livro.ejs", "utf-8");
    const html = ejs.render(template, { livro });

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(html);

  } else if (urlInfo.pathname.startsWith("/imagens/")) {
  const nomeArquivo = path.basename(urlInfo.pathname);
  const caminho = path.join(__dirname, "imagens", nomeArquivo);

  fs.readFile(caminho, (erro, conteudo) => {
    if (erro) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end("<h1>Imagem não encontrada</h1>");
      return;
    }

    const extensao = path.extname(nomeArquivo).toLowerCase();
    const tipos = {
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
      ".webp": "image/webp"
    };

    res.writeHead(200, { "Content-Type": tipos[extensao] || "application/octet-stream" });
    res.end(conteudo);
  });

} else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Página não encontrada</h1>");
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
})