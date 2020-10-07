const http = require('http');
const app = require('./app');
const config = require('./helpers/config');


const server = http.createServer(app);


const PORT = config.PORT
server.listen(PORT, ()=> console.log(`Server Stared and Listening on: ${PORT}`))