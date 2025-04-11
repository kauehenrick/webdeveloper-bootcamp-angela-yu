import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Página inicial</h1>");
})

app.get("/contact", (req, res) => {
  res.send("<h1>Página de contato</h1>");
})

app.get("/about", (req, res) => {
  res.send("<h1>Página sobre mim</h1>")
})

app.listen(3000, () => {
  console.log("O servidor está rodando na porta 3000!");
})