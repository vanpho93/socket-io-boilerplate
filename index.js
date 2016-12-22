var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.set('view engine','ejs');
app.set('views','views');
app.use(express.static('public'));
server.listen(3000, () => console.log('Server started'));

app.get('/', (req,res) => res.render('home'));
io.on('connection', socket => {
  console.log('Co nguoi ket noi');
});
