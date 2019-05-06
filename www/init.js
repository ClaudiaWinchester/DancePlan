function init() {
    document.addEventListener("deviceready", deviceReady, true);
    delete init;
}

function deviceReady() {
 
    $("#loginForm").on("enviar",function(e) {
    	//Deshabilitar botón para no reenviar mientras se espera
    	$("#botonEnviar",this).attr("disabled","disabled");
        var u = $("#username", this).val();
        var p = $("#password", this).val();
        if(u != '' && p!= '') {
        	$.post("https://www.coldfusionjedi.com/demos/2011/nov/10/service.cfc?method=login&returnformat=json", {username:u,password:p}, function(res) {
        		if(res == true) {
        			$.mobile.changePage("some.html");
        		} else {
        			navigator.notification.alert("Tu login ha fallado", function() {});
        		}
	        	$("#botonEnviar").removeAttr("disabled");
        	},"json");
        }
        return false;
    });

}