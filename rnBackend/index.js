const express = require("express");
const app = express();
const bodyParser = require("body-parser")

const userControllers = require('./controllers/userController');
const {mongoose} = require('./db/db');

app.get("/", (req, res) => {
	console.log("Hello Friends");
	res.send("JS Really !!!");
});


app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

app.use("/user", userControllers);

app.listen(3333, () => {
	console.log("Server is Running")
});