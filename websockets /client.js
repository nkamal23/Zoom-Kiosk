const WebSocket = require('ws');
const url = 'ws://localhost:8080'
const connection = new WebSocket(url)


connection.onopen = () => {
  connection.send('hey')
}

connection.onmessage = (message) => 
{
	console.log(message.data);
}
