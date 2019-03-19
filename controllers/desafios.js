const db = require("../db");
const connection = db.mysql;

function buscar(){

  return new Promise(function(resolve,reject){
    connection.query("SELECT a.* from challengers a inner join users_challengers up on (up.challenger_id = a.id)  inner join users u on (u.id = up.users_id);", function(err,rows){
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

function buscarPorUsuario(req){

  return new Promise(function(resolve,reject){
    connection.query(`
    SELECT a.* from challengers a
     inner join users_challengers up on (up.challenger_id = a.id) 
     inner join users u on (u.id = up.users_id) where u.id = ${req.params.id};`, function(err,rows){
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

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