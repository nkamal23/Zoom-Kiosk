var http = require('http');
var robot = require("robotjs");
var QRCode = require("qr-image");
var fs = require("fs");
var express = require('express');



const app = new express();
var screenSize = robot.getScreenSize();


//Variables
var ip = "192.168.1.159";
var externalIP = "http://sharkshark.duckdns.org"
const QRPort = 80;
var callRequestPort = 1338;
var personCalled = "Matthew Jones";





//Running code --- START
// Speed up the mouse.
robot.setMouseDelay(2);


app.get('/', function(request, response){

	var temp = externalIP+":"+callRequestPort;
	var code = QRCode.image(temp, { type: 'svg' });
	response.type('svg');
	code.pipe(response);
	
    console.log(temp);







});

app.listen(QRPort, () => {
  console.log(`Example app listening at http://localhost:${QRPort}`)
})



http.createServer(function(req, res)
{
		res.writeHead(200, {'Content-Type': 'text/plain'});
      	res.end('Request sent\n');
      	makeZoomCall(personCalled);
}).listen(callRequestPort, ip);



setupZoom();


//Running code --- FINISH




async function makeZoomCall(name){
	//Open windows search - Zoom
	openZoom();

	//Search in Zoom
	robot.keyToggle("control", "down");
	robot.keyTap("t");
	robot.keyToggle("control", "up");

	robot.typeString(name);
	robot.keyTap("enter");
	robot.keyTap("enter");

	robot.keyTap("tab");
	robot.keyTap("right");
	robot.keyTap("down");
	robot.keyTap("down");

	robot.keyTap("enter");

}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 




function openZoom()
{
	//Open windows search - Zoom
	var screenSize = robot.getScreenSize();
	robot.moveMouse(0,screenSize.height);
	robot.mouseClick();

	robot.typeStringDelayed("Zoom");
	robot.keyTap("enter");


}


async function setupZoom()
{
	openZoom();
	await sleep(5000);

	robot.keyToggle("alt", "down");
	robot.keyTap("f4");
	robot.keyToggle("alt", "up");

}
