const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const path = require("path");

// Importar Rotas
const indexRouter = require("./routes/index");
const desafioRouter = require("./routes/desafios");

// Instanciar Express
const app = express();

// Configurar Template Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Configurações Extras
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/node_modules/materialize-css/dist")));

// Rotas
app.use("/", indexRouter);
app.use("/desafio",desafioRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
