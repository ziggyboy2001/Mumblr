const PORT = 3000;
const express = require('express');
const server = express();
const morgan = require('morgan');
const apiRouter = require('./api');
const { client } = require('./db');


// THIS IS OUR DATABASE
client.connect();

server.listen(PORT, () => {
    console.log('The server is up on port', PORT)
});

server.use(morgan('dev'));
server.use(express.json());
server.use('/api', apiRouter);


server.use((req, res, next) => {
console.log("<____Body Logger START____>");
    console.log(req.body);
    console.log("<_____Body Logger END_____>");
    
    next();
  });