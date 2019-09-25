/*var http = require("http");

var server = http.createServer(function(req, res){
	res.writeHead(200);
	res.end("Hello World");
}).listen(3000,"127.0.0.1");*/

const express = require('express')
const app = express()

app.get('/coucou', function (req, res) { //a chaque fois qu'il recoit une requette get à la racine du site, executer la function
  res.send('Hello World!')
})

app.listen(process.env.PORT || 3000, function () { //s'éxecute dès que le serveur est prêt à recevoir des requettes (écoute sur le port 3000)
  console.log('Example app listening on port 3000!')
})