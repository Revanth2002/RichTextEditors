
console.log("-----Starting server-------");

var firstRaw = `First · Secondshshsh<div>check the world</div><div><br></div><div><div style="color: rgb(212, 212, 212); background-color: rgb(30, 30, 30); font-family: Consolas, &quot;Courier New&quot;, monospace; font-size: 14px; line-height: 19px; white-space: pre;"><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: #9cdcfe;">className</span>=<span style="color: #ce9178;">"customtextarea"</span></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: #9cdcfe;">contentEditable</span>=<span style="color: #ce9178;">'true'</span> </div></div></div><div><br></div><div>test&nbsp;</div><div><b>BOLD</b></div>`;

const io = require('socket.io')(3001,{
        cors: {
            origin : 'http://localhost:3000',
            method : ['GET','POST'],
        }
    });

io.on("connection", (socket) => {
    console.log("Client connected");
  // send a message to the client
  const msg = {"msg" : "saved","raw" : firstRaw}
  socket.emit("server",JSON.stringify(msg));

  // receive a message from the client
  socket.on("message", (messageAsString) => {
    // ...
    const message = JSON.parse(messageAsString);
    firstRaw = message.raw;
    const msg = {"msg" : "received","raw" : firstRaw}
    socket.broadcast.emit("server",JSON.stringify(msg));
    console.log(messageAsString);
  });
});

/*-----------------------------------------------------*/
/*----Quill----*/
// const io = require('socket.io')(3001,{
//     cors: {
//         origin : 'http://localhost:3000',
//         method : ['GET','POST'],
//     }
// });

// io.on('connection',socket => {
//     console.log('connected')
//     socket.on('send-changes',delta => {
//         console.log(delta)
//         socket.broadcast.emit('receive-changes',delta);
//     })
//     socket.on('disconnect',()=>{
//         console.log('disconnected')
//     })
// })
/*

wss.on('connection',(ws,req) => {
    console.log("Client connected");
    const msg = {"msg" : "saved","raw" : firstRaw}
    ws.send(JSON.stringify(msg));
    

    ws.on('error',(err)=>{
        console.log(err);
    })

    ws.on('close',() => {
        console.log("Client disconnected");
    })

    ws.on('message',(messageAsString) => {
        const message = JSON.parse(messageAsString);
        firstRaw = message.raw;
        console.log("incoming msg");
        const msg = {"msg" : "received","raw" : firstRaw}
        ws.emit(JSON.stringify(msg));
    })

})

*/