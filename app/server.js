'use strict';

const express = require('express');
const cors = require('cors')
const companion = require('@uppy/companion')
const bodyParser = require('body-parser')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// app.use(cors())
app.use(bodyParser.json())

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
    filePath: '/upload',
    debug: true
  }
  
app.use(companion.app(options))

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.send("Hello there, here's a response from companion")
  })

var svr = app.listen(3020, "0.0.0.0");
companion.socket(svr, options)

const app2 = express();
app2.use(express.static('www'))
app2.listen(PORT, HOST);
