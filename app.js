const express = require("express");
const app = express();

app.get("/hello", function(req, res) {
	console.log("GET /hello ");
	const headers = JSON.stringify(req.headers, null, 4);
	console.log(headers); 
	var target = "Hello Update LIVE UPDATE";
	target += "<br><pre>" + headers + "</pre>";
	res.send("/hello " + target + "!");
	console.log("done"); 
});

const port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Hello world listening on port", port);
    });

