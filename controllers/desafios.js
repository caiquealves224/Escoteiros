const usuarios = require("./model/usuario");

const desafios = function(req,res){
  buscar()
    .then((resultado)=>{
      res.render("desafios",{title: "desafios", results:resultado});
    });
};

const desafiosPorUsuario = function(req,res){
  buscarPorUsuario(req)
    .then(resultado => {
      res.render("desafios", {title: `Desafios do ${req.params.id}`, results:resultado});
    });
};

module.exports = {
  desafios,
  desafiosPorUsuario
};