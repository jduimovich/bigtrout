const express = require("express");
const app = express();

app.get("/", function(req, res) {
	console.log("Hello world received a request."); 
	const headers = JSON.stringify(req.headers, null, 4);
	console.log(headers); 

	var target = process.env.TARGET || "Hello World";
	target += "<br><pre>" + headers + "</pre>";
	res.send("/ " + target + "!");
	});
	
	app.get("/hello", function(req, res) {
		console.log("Hello world received a request."); 
		const headers = JSON.stringify(req.headers, null, 4);
		console.log(headers); 
	
		var target = process.env.TARGET || "Hello World";
		target += "<br><pre>" + headers + "</pre>";
		res.send("/hello " + target + "!");
		});


const port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("xyz Hello world listening on port", port);
    });

