


/*-----------------------------------------------------*/
/*----Quill----*/
/*const io = require('socket.io')(3001,{
    cors: {
        origin : 'http://localhost:3000',
        method : ['GET','POST'],
    }
});

io.on('connection',socket => {
    console.log('connected')
    socket.on('send-changes',delta => {
        console.log(delta)
        socket.broadcast.emit('receive-changes',delta);
    })
    socket.on('disconnect',()=>{
        console.log('disconnected')
    })
})*/
