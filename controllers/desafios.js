const desafios = require("../models/desafio");

const index = function(req,res){
  desafios.all()
    .then((resultado)=>{
      res.render("desafios",{title: "desafios", results:resultado});
    });
};

const desafiosPorUsuario = function(req,res){
  desafios.findOfUser(req.params.id)
    .then(resultado => {
      res.render("desafios", {title: `Desafios do ${req.params.id}`, results:resultado});
    });
};

module.exports = {
  index,
  desafiosPorUsuario
};