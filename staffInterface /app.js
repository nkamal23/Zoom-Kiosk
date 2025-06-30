var fs = require('fs');

const express = require('express')
const formData = require('express-form-data');
const app = express()
const port = 3000


function save(textfile, data){
	fs.writeFileSync(textfile, JSON.stringify(data), function(err) {
	    if (err) {
	        console.log(err);
	    }
	});
}

function read(textfile)
{
	var data = fs.readFileSync(textfile,{encoding:'utf8', flag:'r'});
	return JSON.parse(data);
}






var contents = read("responders.txt");




app.get('/', (req, res) => {
if (Object.keys(req.query).length !== 0)
	{
		//console.log("moot");
  		res.redirect(req.baseUrl+"/")
  	}
  	else
  	{
  		res.send(formatPage(contents))
  	}

  	if (req.query.delete != undefined && req.query.delete != '')
  	{
  		contents.splice(req.query.delete, 1);
  		save("responders.txt", contents);
  	}


  	if (req.query.Name)
  	{
  		contents.push({name: req.query.Name, priority: req.query.Priority * 1, available: (req.query.available == 'true')});

  		contents.sort(function(a, b) {
    		return a.priority - b.priority;
		});
		save("responders.txt", contents);
  	}

  


})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


function formatPage(contents)
{
	var temp = '<!DOCTYPE html><html><title>Zoom kiosk staff availbilities</title><body><form id="form1"><input type="text" name="Name" placeholder="Name"><input type="number" name="Priority" placeholder="Priority"><input type="hidden" name="available" value="true"><input type="hidden" name="delete" value=""><input type="submit">'
	temp += "<br>";
	for (var i = 0; i < contents.length; i++)
	{
		temp += "<p>"
		temp += contents[i].name
		temp += ", with priority ";
		temp += contents[i].priority;
		temp += '<button type="submit" form="form1" onclick="'
		temp += 'document.getElementsByName('
		temp += "'delete'"
		temp += ')[0].value = '
		temp += i;
		temp += '">X</button>'
		temp += "</p>"

	}
	temp += '</form></body></html>'
	return temp;
}
