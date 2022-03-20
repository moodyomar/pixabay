const express = require('express');
const http = require('http');

 const app = express();
 app.use(express.json())
 const server = http.createServer(app);

 const port = 3001 || process.env.PORT;
 server.listen(port,() => console.log('app is listening to port => ',port))