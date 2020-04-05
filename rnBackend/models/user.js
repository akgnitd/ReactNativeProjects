const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema({

	name: {
		type: String,
		required: true,
		minlength: 3,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		minlength: 3,
		trim: true
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
		trim: true
	}
});

const User = mongoose.model('User', UserSchema);

module.exports = {User};