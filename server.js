const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const port = 3000;
//lendo as informacoes do usuario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//adicionando a pasta public
app.use(express.static(path.resolve(__dirname, "public")));

// Importando as rotas
const userRouter = require("./src/routes/userRoutes");
const casaRouter = require("./src/routes/casaRoutes");

// Configuração do Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Especificando o diretório de visualizações
app.set("views", path.resolve(__dirname, "src", "views"));

// Roteamento
app.use("/", userRouter);
app.use("/casas", casaRouter);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`O servidor está em http://localhost:${port}`);
});
