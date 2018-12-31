const express = require('express')
    , app = express()
    , server = require('http').createServer(app)
    , bodyParser = require('body-parser')
    , io = require('socket.io')(server);

require('dotenv').config();

app.set('views', __dirname + '/views');

app.engine('ejs', require('ejs').__express);
app.set('view engine', 'html');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded());

// Adding sockets to the request
app.use(function (req, res, next) {
    res.io = io;
    next();
});

app.use(require('./routes'));
app.use(require('./middlewares/exceptions'));

app.route('*', function (req, res, next) {
    return next(new Error('Invalid route!'))
});
server.listen(process.env.PORT, process.env.HOST, function () {
    console.log('Listening on ' + process.env.HOST + ':' + process.env.PORT);
});