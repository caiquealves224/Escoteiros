const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const session = require("express-session");
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

// Configurar sessão
app.use(session({
  secret: "TheAppSession",
  resave: false,
  saveUninitialized: false
}));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/node_modules/materialize-css/dist")));

// Auth
app.use(function(req, res, next){
  var err = req.session.error;
  var msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = "";
  if (err) res.locals.message = `<p class="msg error">${err}</p>`;
  if (msg) res.locals.message = `<p class="msg success">${msg}</p>`;
  next();
});

// Rotas
app.use("/", indexRouter);
app.use("/desafios",desafioRouter);

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