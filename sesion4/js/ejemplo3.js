$(document).ready(function()
	{
		$("#btn").click(function()
		{
			$("div").show();//a todos los div
		})
		$("div").click(function()
		{
			$(this).hide();
		})
		//$("#div").css("background-color","#ff00ff");
	})