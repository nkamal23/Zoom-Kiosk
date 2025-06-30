var fs = require('fs');



var contents = [];

contents.push({name: 'Matthew Jones', priority: 0, available: true});
contents.push({name: 'Zoom Test973', priority: 1, available: true});
contents.push({name: 'Zoom Test974', priority: 23, available: false});

function save(textfile, data){
	fs.writeFileSync(textfile, JSON.stringify(data), function(err) {
	    if (err) {
	        console.log(err);
	    }
	});
}

function read(textfile)
{
	var data = fs.readFileSync('./people.txt',{encoding:'utf8', flag:'r'});
	return JSON.parse(data);
}





save("people.txt", contents);
var moot = read("people.txt");


  
// Display the file data
console.log(moot);
