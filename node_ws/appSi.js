var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

app.get('/chat3',(req,res) => {
	res.sendFile(__dirname + '/www/chat3.html')
})
app.get('/chat4',(req,res) => {
	res.sendFile(__dirname + '/www/chat4.html')
})

io.on('connection', (socket) => {
	console.log('客户端与服务端连接成功')
	//监听客户端的消息
	socket.on('message',(data) => {
		console.log(data)
		//将信息发给每个人
		io.emit('message',data);
	})
	//断开连接
	socket.on('disconnect', () => {
        console.log('连接已断开...');
    });
})