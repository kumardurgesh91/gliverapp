var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var users = new Schema({
	fname:  {
		type:String,
		require:true,
		trim:true
	},
	lname:  {
		type:String,
		require:true,
		trim:true
	},
	email:  {
		type:String,
		require:true,
		trim:true
	},
	password:  {
		type:String,
		require:true,
		trim:true
	}
});
var Users = mongoose.model('Users', users);

module.exports = Users;