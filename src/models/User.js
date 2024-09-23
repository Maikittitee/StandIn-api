const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	fullname: String,
	username: String,
	password: String,
	email: String,
	update_at: {type: Date, default: Date.now}

})

module.exports = mongoose.model("User", UserSchema);

