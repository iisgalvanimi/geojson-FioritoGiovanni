var express = require('express');
var app = express(); 

const path = require('path');

app.get('/', getcallback);
function getcallback(req,res) {
  res.sendFile(path.join(__dirname, 'index.html'));
}

app.get('/about',function(req,res){
 res.sendFile(path.join(__dirname, 'about.html')); 
});

app.get('/sitemap',function(req,res){
 res.sendFile(path.join(__dirname, 'sitemap.html')); 
});

app.listen(3000, funzione);
function funzione() {
  console.log('Example app listening on port 3000!');
}