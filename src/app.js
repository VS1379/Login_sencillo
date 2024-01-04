const express = require("express");
const logger = require("morgan");
const path = require("path");
const indexRoute = require("./routes/index.routes");
const methodOverride = require("method-override");

const port = process.env.PORT || 3001;

const app = express();

app.use(methodOverride("_method")); //permite utilizar put y delete
app.use(express.static(path.join(__dirname, "../", "public"))); //definir la carpeta publica
app.set("view engine", "ejs"); //motor vistas
app.set("views", path.join(__dirname, "views")); //setear la carpeta de views
app.use(express.urlencoded({ extended: false })); //Enviar y recibir informacion con los metodos http
app.use(express.json()); //Enviar y recibir informacion con los metodos http

app.use(logger("dev"));

app.use("/", indexRoute);

app.use((req, res, next) => {
  res.status(404).render("not-found");
  next();
});

app.listen(port, () => {
  console.log(`Server Runing in http://127.0.0.1:${port}`);
});
