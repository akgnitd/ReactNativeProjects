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
	},
	tokens: [
		{
			access: {
				type: String,
			},
			token: {
				type: String,
			}
		}
	]
});

//userSchema.statics.generateAuthToken = function() {
//	console.log(this)
//}

UserSchema.methods.generateAuthToken = function() {
	console.log(this)
	const user = this;
	const access = "auth";

	const token = jwt.sign({_id: user._id.toHexString(), access }, "HDG568SDG5F5FBCB").toString();

	user.tokens.push({
		access, 
		token
	});

	return user.save().then(() => {
		console.log("token", token)
		return token;
	});
}

const User = mongoose.model('User', UserSchema);

module.exports = {User};