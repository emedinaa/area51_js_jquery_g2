var VERSION =1.0;

function init()
{
	var output=document.getElementById("output");
	var btn=document.getElementById("btn");
	var btn2=document.getElementById("btn2");

	console.log("init version ",VERSION);
	output.innerHTML="<p>Un texto </p>";

	//eventos
	console.log("btn ",btn);
	/*btn.click(function()
		{
			console.log("click");
			alert("Evento de click ");
		});*/
	btn2.onclick=function()
	{
		alert("Evento de click 2");
	}
}

function message()
{
	console.log("click");
	alert("Evento de click ");
}

init();