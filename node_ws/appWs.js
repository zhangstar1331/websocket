var ws = require('nodejs-websocket');
console.log("开始建立连接...")

var server = ws.createServer((conn) => {
	conn.on("text", (str) => {
        console.log("接收的信息 "+str)
        //发送信息
        broadcast(str)
    })
    conn.on("close", (code, reason) => {
        console.log("关闭连接")
    })
})
function broadcast(str) {
	//把消息发送到每一个连接服务的客户端
    server.connections.forEach(function(connection) {
        connection.sendText(str);
    })
}
//监听端口
server.listen(3000)
console.log("WebSocket建立完毕")