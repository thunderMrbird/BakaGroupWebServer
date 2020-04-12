var express = require('express');
var app = express();

app.use('/static', express.static('public'))

app.get('/nga', function (req, res) {
  res.sendFile(__dirname + "/source/nga/" + "nga.html");
});

app.get('/nickname', function (req, res) {
  res.sendFile(__dirname + "/source/" + "nickname.html");
});

app.get('/rankAdvice', function (req, res) {
  res.sendFile(__dirname + "/source/" + "041123342709.html");
});

app.get('/heroineAdvice', function (req, res) {
  res.sendFile(__dirname + "/source/heroineAdvice/" + "041123451034.html");
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});


app.listen(3000);