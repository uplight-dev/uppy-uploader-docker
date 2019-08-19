'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.static('www'))

const options = {
    server: {
      host: 'localhost:3020',
      protocol: 'http',
    },
    filePath: '/app/upload'
  }
  
  app.use(companion.app(options))

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);