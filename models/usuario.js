const db = require("../db");
const connection = db.mysql;


function all(){

    return new Promise(function(resolve,reject){
        connection.query(`SELECT * FROM users`, (err,rows)=>{
            if (err) reject(err);
            else resolve(rows);
        });
    })
}

function find(id){

    return new Promise((resolve,reject)=>{
        connection.query(`SELECT * FROM users where id = ${id}`,(err,rows)=>{
            if (err) reject(err);
            else resolve(rows);
        })
    })
}



module.exports = {
    all,
    find
}