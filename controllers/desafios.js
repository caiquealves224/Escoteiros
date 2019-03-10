const db = require('../db');
const connection = db.mysql;

function buscar(){

  return new Promise(function(resolve,reject){
    connection.query("SELECT * FROM escoteiros.users_challengers;", function(err,rows,fields){
      if (err) reject(err)
      else resolve(rows) 
    })
  })
}

const desafios = function(req,res,next){
  buscar()
    .then((resultado)=>{
      console.log((resultado))
      return resultado
    })
    .then((resultado)=>{
      res.render("desafios",{title: "desafios", results:resultado})
    });
}

module.exports = desafios