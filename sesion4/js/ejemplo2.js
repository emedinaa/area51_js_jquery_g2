/**
@autor : emedinaa
@email : emedinaa@qd.pe

1. Descargar jquery http://jquery.com/
http://jquery.com/download/
2. Jquery 1.9.1 http://code.jquery.com/jquery-1.9.1.min.js

*/
/*
	function init()
	{
		console.log("init");
	}
	init();
*/
$(document).ready(function()
	{
		var estado=true;
		console.log("ready");
		//clasica
		/*var p=document.getElementById("p");
		p.innerHTML="Texto con JS";*/
		//jquery
		$("#p").html("Texto con Jquery");//innerHTML
		console.log("p ",$("#p"));
		//$("#p").hide();
		//$("p").hide();//desaparece
		//$("p").show();//mostrar

		$("#btn").click(function()
			{
				//alert("Jquery");
				if(estado==true)
				{
					$("p").hide();
					estado=false;
				}else
				{
					$("p").show();
					estado=true;
				}
			})
		$("#btn2").click(function()
		{
			$("p").toggle();//hide y show
		})
	})



