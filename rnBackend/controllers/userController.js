const express = require('express');
const router = express.Router();

const {User} = require("../models/user");

router.post("/create", (req, res) => {
	console.log("/create");
	console.log(req.body);
	const user = new User({
		email: req.body.email,
		password: req.body.password
	})
	user.save().then((user) => {
		if (user) {
			res.send(user);
		} else {
			res.sendStatus(400)
		}
	})
});

router.post("/login", (req, res) => {

});

router.post("/logout", (req, res) => {

});


router.get("/", (req, res) => {
	console.log("USER")
	res.send("THIS IS A USER ROUTE")
})

module.exports = router