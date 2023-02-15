const mysql = require("mysql")


let db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root122",
    database :"projects" 
})

db.connect(function(err){
    if(err) throw err;
    console.log("connected!")
})  

 
module.exports = db 