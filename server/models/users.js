var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = new Schema({
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
var User = mongoose.model('Cat', user);

module.exports = user;