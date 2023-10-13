const app = require('express')()
const http = require('http').createServer(app)


app.get('/', (req, res) => {
    res.send("<h1>Alhamdulillah, It works!!!</h1>")
})

//Socket Logic
const socketio = require('socket.io')(http)

socketio.on("connection", (userSocket) => {
    userSocket.on("send_message", (data) => {
        userSocket.broadcast.emit("receive_message", data)
    })
})

// http.listen(process.env.PORT)
http.listen(3000)