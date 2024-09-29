const express =require('express');
const app = express();
const http =require('http');
const path = require('path');
const { Server } =require('socket.io');
const expressServer = http.createServer(app);
// socket server setup
const io = new Server(expressServer)


//socket connect 
io.on('connection', (socket)=>{
  console.log("User is connect")
  socket.on('disconnect', ()=>{
    console.log("User is dis connect");
  })
})
//connect client
app.use(express.static('client/build'))

//client all path access
app.get('*', (req,res)=>{
  res.sendFile(__dirname, 'client','build','index.html');
})

app.get('/express-server', (req,res)=>{
  res.send("successfull server create");
})
expressServer.listen(5000, ()=>{
  console.log('http://localhost:5000');
})