var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var usersSchema = new Schema({
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

// saveing user
usersSchema.statics.saveUser = function (userObj, cb) {
	if(!userObj.email || userObj.email === undefined || typeof userObj.email === undefined)
  		return cb("Invalid first name", null);
  	if(!userObj.fname || userObj.fname === undefined || typeof userObj.fname === undefined)
  		return cb("Invalid first name", null);
  	if(!userObj.lname || userObj.lname === undefined || typeof userObj.lname === undefined)
  		return cb("Invalid first name", null);
  	if(!userObj.password || userObj.password === undefined || typeof userObj.password === undefined)
  		return cb("Invalid first name", null);
  	this.findOneByProp({email:userObj.email}, function (err, user) {
  		// body...
  		console.log(err, user);
  		if(err)
  			return cb(err, null);
  		else if(user)
  			return cb("email id already exist", null);
  		else 
  			return this.create(userObj, cb);
  	});
}

usersSchema.statics.findOneByProp = function (query, cb) {
	// body...

	if(typeof query === 'object') {
		return this.findOne(query, cb);
	} else {
		cb("Invalid search query", null);
	}
}

var Users = mongoose.model('Users', usersSchema);

module.exports = Users;