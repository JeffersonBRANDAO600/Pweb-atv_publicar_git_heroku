//importando o express 
var express = require('express');

//Criando a var app para chamar os métodos do express
var app = express();

//setando a view engine => EJS
app.set('view engine', 'ejs');

//Config path do arquivos estáticos
app.use(express.static('./public'));


app.get('/math_random', function(req,res){
    res.render('math_random/mr');
});

app.get('/math', function(req,res){
    res.render('math/m');
});

app.listen(5000, function(){
    console.log("Servidor rodando com Express");
});