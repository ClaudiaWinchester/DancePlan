function handleLogin() {
	var form = $("#loginForm");	
	//Deshabilitar botón mientras se hace login
	$("#botonEnviar",form).attr("disabled","disabled");
	var u = $("#usuario", form).val();
	var p = $("#contrasena", form).val();
	console.log("click");
	if(u != '' && p!= '') {
		$.post("https://www.coldfusionjedi.com/demos/2011/nov/10/service.cfc?method=login&returnformat=json", {usuario:u,contrasena:p}, function(res) {
			if(res == true) {
				//store
				window.localStorage["usuario"] = u;
				window.localStorage["contrasena"] = p;        			
				$.mobile.changePage("some.html");
			} else {
				navigator.notification.alert("Tu login falló", function() {});
			}
	    	$("#botonEnviar").removeAttr("disabled");
		},"json");
	}
	return false;
}