'use strict';

const express = require('express');
var companion = require('@uppy/companion')
const bodyParser = require('body-parser')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(cors())
app.use(bodyParser.json())

//app.use(express.static('www'))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*')
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    )
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Authorization, Origin, Content-Type, Accept'
    )
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next()
});

const options = {
    server: {
      host: '0.0.0.0:3020',
      protocol: 'http',
    },
    filePath: '/app/upload',
    debug: true
  }
  
app.use(companion.app(options))
console.log('companion')

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.send("Hello there, here's a response from companion")
  })

// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);

// companion.socket(app, options)