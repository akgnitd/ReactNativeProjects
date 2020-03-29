const express = require("express");
const app = express();

app.get("/", (req, res) => {
	console.log("Hello Friends");
	res.send("JS Really !!!");
});


app.listen(3333, () => {
	console.log("Server is Running")
});