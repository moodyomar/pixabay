const express = require('express');
const http = require('http');
const {routes} = require('./routes/configRoutes')

const app = express();
const server = http.createServer(app);
const port = 3001 || process.env.PORT;

app.use(express.json())
routes(app)
server.listen(port,() => console.log('app is listening to port => ',port))