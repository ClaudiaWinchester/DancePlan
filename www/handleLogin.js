function handleLogin() {
	var form = $("#loginForm");	
	//Deshabilitar botón mientras se hace login
	$("#submitButton",form).attr("disabled","disabled");
	var u = $("#username", form).val();
	var p = $("#password", form).val();
	console.log("click");
	if(u != '' && p!= '') {
		$.post("https://www.coldfusionjedi.com/demos/2011/nov/10/service.cfc?method=login&returnformat=json", {username:u,password:p}, function(res) {
			if(res == true) {
				//store
				window.localStorage["username"] = u;
				window.localStorage["password"] = p;        			
				$.mobile.changePage("some.html");
			} else {
				navigator.notification.alert("Your login failed", function() {});
			}
	    	$("#submitButton").removeAttr("disabled");
		},"json");
	}
	return false;
}