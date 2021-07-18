var express = require('express')
var http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const request = require('request')

var app = express()
var server = http.createServer(app)

var socketio = require('socket.io')
const PORT = 4000


const io = socketio.listen(server)

users = []
connections = []

server.listen(4000)
console.log('Server Running!!!!!!')




app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/chat', (req,res) => {
        res.render('chat.ejs')
})
app.get('/', (req,res) => {
    res.render('index.ejs')
})


app.use(express.static('views'))

io.sockets.on('connection', function(socket) {
    //connect
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length)

    //disconnect
    socket.on('disconnect', function(data) {
        users.splice(users.indexOf(socket.username), 1);
        updateUsernames();
        connections.splice(connections.indexOf(socket),1)
        console.log('Disconnected: %s sockets connected', connections.length)
    });

    //send Message
    socket.on('send message', function(data) {
        io.sockets.emit('new message', { msg: data, user: socket.username})
    });

    //new user
    socket.on('new user', function(data, callback) {
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsernames();
    });

    function updateUsernames() {
        io.sockets.emit('get users', users);
    }
});