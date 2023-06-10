var express = require("express");
var ven = require('./ven');
var app = express();
const Str = require('@supercharge/strings')
app.listen(8081);
app.get("/" , (req, res) => {
    res.send("First Responce Laxman");
}); 

// app.get("/Vendor", (req, res) => {
// res.json(arr
// [   "lifnr" : 123,
//     "name"  : "Laxman" 
// ]}); 


 app.get("/ven/:id", (req, res) =>
 {   let foundUser = ven.find(x => x.lifnr === parseInt(req.params.id));
     let jsonString = JSON.stringify(foundUser);
     
     if ( jsonString === "") {
        res.send();
     } else {
        res.send(jsonString);
     }

 });
// app.get('/ven/:uid', (req, res) => {
//     let foundUser = ven.find(x => x.lifnr === parseInt(req.params.uid));
//     let jsonString = JSON.stringify(foundUser);
//     res.send(jsonString);
//   }); 