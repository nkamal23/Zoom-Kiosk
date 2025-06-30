var open = require("open");
var robot = require("robotjs");



//Sleep function
async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 


//Invite function
function invitePerson(person)
{
	
	robot.keyToggle("alt", "down");
	robot.keyTap("i");
	robot.keyToggle("alt", "up");

	robot.keyTap("tab");
	robot.keyTap("tab");


	robot.typeString(person);
	robot.keyTap("enter");
	robot.keyTap("tab");
	robot.keyTap("tab");
	robot.keyTap("tab");
	robot.keyTap("tab");
	robot.keyTap("tab");
	robot.keyTap("tab");
	robot.keyTap("enter");


}


//make host function
function makeOtherHost()
{
	robot.keyToggle("alt", "down");
	robot.keyTap("u");
	robot.keyToggle("alt", "up");


	
	robot.keyTap("tab");
	robot.keyTap("tab");
	robot.keyTap("tab");
	robot.keyTap("tab");	
	robot.keyTap("tab");
	robot.keyTap("tab");


	robot.keyTap("down");
	robot.keyTap("down");
	robot.keyTap("tab");
	robot.keyTap("tab");
	robot.keyTap("enter");


	robot.keyTap("down");
	robot.keyTap("down");	
	robot.keyTap("down");	
	robot.keyTap("down");	
	robot.keyTap("enter");
	robot.keyTap("enter");

}



//Running code
async function runCode(){
	open('https://zoom.us/start/videomeeting');
	await new Promise(resolve => setTimeout(resolve, 10000));
	invitePerson("Zoom Test973");
	await new Promise(resolve => setTimeout(resolve, 15000));
	makeOtherHost();


}

//Running 
runCode();
