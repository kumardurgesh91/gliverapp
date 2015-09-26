(function(){
	var env, port, host, protocol, baseUrl, screenHeight = $(window).height(), screenWidth = $(window).width(), isLogined = false, user = new Object();

	var setting = $.getJSON( "js/setting.json");
	setting.done(function(data) {
  		env = data.env || "dev";
  		port = data[env].port || 3000;
  		host = data[env].host || "127.0.0.1";
  		protocol = data[env].protocol || "http";
  		baseUrl = protocol + "://" + host + ":" + port;
  		isUserLogined();
	});
	
	setting.fail(function() {
	    alert("please try again, chat feature not available.");
	});

	function setChatWindow() {
		if(isLogined) {
			$("#chat-bar").slideDown();
			$("#chat-box").animate({"bottom": "+=375px" }, "fast" );
		} else {
			$("#chat-bar").animate({"bottom": "-=375px" }, "fast" );
			$("#chat-signupbox").animate({"bottom": "-=375px" }, "fast" );
			$("#chat-loginbox").animate({"bottom": "+=375px" }, "fast" );
		}
	}

	function showSignUp() {
		if(isLogined) {
			$("#chat-bar").slideDown();
			$("#chat-box").animate({"bottom": "+=375px" }, "fast" );
		} else {
			$("#chat-bar").animate({"bottom": "-=375px" }, "fast" );
			$("#chat-loginbox").animate({"bottom": "-=375px" }, "fast" );
			$("#chat-signupbox").animate({"bottom": "+=375px" }, "fast" );
		}
	}

	function isUserLogined() {
		$.ajax({
		method: "GET",
		dataType: "json",
	  	url: baseUrl + "/users/isLogined",
	  	success: function (data) {
	  		isLogined = data;
	  	},
	  	error: function (error) {
	  		console.log(error);
	  	}
	});
	}

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
	isUserLogined();
	$(".panel-title, .chat-login-link").on("click", function(){setChatWindow();});
	$(".chat-signup-link").on("click", function(){showSignUp();});
}());