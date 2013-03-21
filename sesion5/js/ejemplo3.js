$(document).ready(function()
{
	//declara variables
	//eventos
	$("#user").focus(focus_handler);
	$("#user").blur(blur_handler);
});

function focus_handler(e)
{
	console.log("focus ",$(e.target));
	$("#user").val("");
	$("#user").css("background-color","white");
}

function blur_handler(e)
{
	console.log("blur ",$(e.target));
	var suser=$("#user").val();//valor del input
	console.log("user input ",suser);
	//$("#user").value("Escribe un usuario");
	if(suser=="")
	{
		$("#user").css("background-color","red");
		$("#user").val("Ingresa un user");
	}
}
