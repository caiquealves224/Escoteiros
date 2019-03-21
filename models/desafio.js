const db = require("../db");
const connection = db.mysql; 

function all(){

  return new Promise(function(resolve,reject){
    connection.query(`
      SELECT a.* from challengers a 
      inner join users_challengers up on (up.challenger_id = a.id) 
      inner join users u on (u.id = up.users_id);`, function(err,rows){
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

function findOfUser(id){

  return new Promise(function(resolve,reject){
    connection.query(`
      SELECT a.* from challengers a
      inner join users_challengers up on (up.challenger_id = a.id) 
      inner join users u on (u.id = up.users_id) where u.id = ${id};`, function(err,rows){
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

module.exports = {
  all,
  findOfUser
}