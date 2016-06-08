'use strict'
const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
cors = require('cors'),
port = 8989;

app.use(bodyParser.json());
app.use(cors());

let messages = [{message: 'hi', time: new Date()}, {message: 'hello', time: new Date()}];


app.get('/', function(req, res, next) {
    res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
})

app.post('/', function(req, res, next) {
    messages.push({
        message: req.body.message,
        time: new Date()
    });
    res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
})

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
})
