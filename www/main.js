function init() {
    document.addEventListener("deviceready", deviceReady, true);
    delete init;
}


function checkPreAuth() {
	var form = $("#loginForm");
	if(window.localStorage["usuario"] != undefined && window.localStorage["contrasena"] != undefined) {
		$("#usuario", form).val(window.localStorage["usuario"]);
		$("#contrasena", form).val(window.localStorage["contrasena"]);
		handleLogin();
	}
}

function handleLogin() {
	var form = $("#loginForm");	
	//Deshabilitar botón mientras hace login
	$("#botonEnviar",form).attr("disabled","disabled");
	var u = $("#usuario", form).val();
	var p = $("#contrasena", form).val();
	console.log("click");
	if(u != '' && p!= '') {
		$.post("https://www.coldfusionjedi.com/demos/2011/nov/10/service.cfc?method=login&returnformat=json", {usuario:u,contrasena:p}, function(res) {
			if(res == true) {
				//Almacenar
				window.localStorage["usuario"] = u;
				window.localStorage["contrasena"] = p;        			
				$.mobile.changePage("some.html");
			} else {
				navigator.notification.alert("Tu login ha fallado", function() {});
			}
	    	$("#botonEnviar").removeAttr("disabled");
		},"json");
	} else {
		navigator.notification.alert("Debes ingresar usuario y contraseña", function() {});
		$("#botonEnviar").removeAttr("disabled");
	}
	return false;
}

function deviceReady() {
	
    $("#loginForm").on("enviar",handleLogin);

}