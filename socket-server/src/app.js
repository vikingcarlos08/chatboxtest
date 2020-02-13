const conn = require('./db_connection.js');
const routes = require('./routes/approutes.js')
let express = require('express')
let app = express();
let http = require('http');
let server = http.Server(app);
let socketIO = require('socket.io');
let io = socketIO(server);
let bodyParser = require('body-parser');

const cors = require('cors')
const port = process.env.PORT || 3000;

let corsOptions = {
  origin: 'http://localhost:4400',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions))
app.use('/', routes);

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new-message', (message) => {
     	io.emit('new-message', message);
    });
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});