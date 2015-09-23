$(function(){
	var setting = $.getJSON( "js/setting.json");
	setting.done(function(data) {
  		var env = data.env || "dev";
  		var port = data[env].port || 3000;
  		var host = data[env].host || "127.0.0.1";
  		var protocol = data[env].protocol || "http";
  		var baseUrl = protocol + "://" + host + ":" + port;
  		$("#loginForm").submit(function(){
  			var formData = $(this).serialize();
  			$.ajax({
  				method: "POST",
			  	dataType: "json",
			  	url: baseUrl + "/user/login",
			  	data: formData,
			  	success: function (data) {
		  			// body...
			  		console.log(data);
			  	}
			});
  		});

  		$("#loginForm").submit(function(){
  			var formData = $(this).serialize();
  			$.ajax({
  				method: "POST",
			  	dataType: "json",
			  	url: baseUrl + "/user",
			  	data: formData,
			  	success: function (data) {
		  			// body...
			  		console.log(data);
			  	}
			});
  		});
	});
	
	setting.fail(function() {
	    alert("please try again, chat feature not available.");
	});
});