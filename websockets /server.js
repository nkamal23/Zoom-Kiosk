const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });



wss.on('connection', function connection(ws) {

console.log("Message has been received");

  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});
