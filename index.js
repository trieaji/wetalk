//instantiate express module
const express = require("express");

const cors = require('cors')

const http = require('http')
const {Server} = require('socket.io')

//Get routes to the variabel here
const router = require("./src/routes")

//use express in app variable
const app = express();

const server = http.createServer(app)
const io = new Server(server, {
 cors: {
   origin: 'http://localhost:3000' // define client origin if both client and server have different origin
 }
})
// const socketIo = require('./src/socket')
// socketIo(io)
require('./src/socket')(io)

//define the server port
const port = 5000;

//create the homepage rout
app.use(express.json())

//Create endpoint grouping and router here
app.use('/api/v1', router);

//app.use('/uploads', express.static('uploads'))

//when this nodejs app executed, it will listen to defined port
server.listen(port, () => console.log(`Listening on port ${port}!`));

