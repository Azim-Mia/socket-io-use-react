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
  console.log("New User is connected")
  socket.on('disconnect', ()=>{
    console.log("User is disconnected");
  })
})
//server to client data send..
io.on('connection', (socket)=>{
  socket.send('server data')
})

//connect client
app.use(express.static('client/build'))

//client all path access
app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
})
io.on('connection',(socket)=>{
  setTimeout(()=>{
    socket.emit('smg', "This is Server data Bangladesh");
  },1000)
})

app.get('/express-server', (req,res)=>{
  res.send("successfull server create");
})
expressServer.listen(5000, ()=>{
  console.log('http://localhost:5000');
})