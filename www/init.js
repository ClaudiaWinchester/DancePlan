function init() {
    document.addEventListener("deviceready", deviceReady, true);
    delete init;
}

function deviceReady() {
 
    $("#loginForm").on("submit",function(e) {
    	//disable the button so we can't resubmit while we wait
    	$("#submitButton",this).attr("disabled","disabled");
        var u = $("#username", this).val();
        var p = $("#password", this).val();
        if(u != '' && p!= '') {
        	$.post("https://www.coldfusionjedi.com/demos/2011/nov/10/service.cfc?method=login&returnformat=json", {username:u,password:p}, function(res) {
        		if(res == true) {
        			$.mobile.changePage("some.html");
        		} else {
        			navigator.notification.alert("Your login failed", function() {});
        		}
	        	$("#submitButton").removeAttr("disabled");
        	},"json");
        }
        return false;
    });

}