const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');

const connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'fruits',
    insecureAuth: true
})

const app=express()
app.get('/records',function(req,res){
    // connection.connect()

    // connection.query("select * from fruits where fruit_id=1",function(err,result,filed){
        connection.query("select * from fruits ",function(err,result,filed){
        if(err)throw err

        console.log(result)
        res.send(result)
    })
    // connection.destroy();

})



app.get('/', function (req, res) {
 res.send("Hello")
})

app.get('/hello',function(res,res){
 res.end("Hello request ")
})       


app.get('/err',function (req, res) {
  throw new Error("this is ERROR MESSAGE to know kibana");
})

app.listen(1000,()=>{ 

    console.log("Server is started at http://localhost:1000  address")
})