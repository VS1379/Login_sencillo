const express = require("express");
const loggrer = require("multer");
const path = require("path");
const indexRoute = require("./src/routes/index.routes");

const port = process.env.PORT || 3001;

const app = express();

app.use(loggrer("dev"));

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "./public")));
app.use("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use("/", indexRoute);

app.listen(port, () => {
  console.log(`Server Runing in https://localhost:${port}`);
});
