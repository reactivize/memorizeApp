var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');
var dirPath = path.join(__dirname);


var data = {};

express()
  .use(express.static(dirPath + '/public'))
  .use(bodyParser.json())
  .get('/api/data', (req, res) => res.json(data))


  .post('/api/data', (req, res) => {
    console.log('post cb was called');
    res.json(data = req.body);
  })



  .get('*', (req, res) => res.sendFile(dirPath + '/public/index.html'))
  .listen(3333);
