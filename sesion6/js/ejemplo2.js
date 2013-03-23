$(document).ready(function()
{
	init();
	//events
	//destroy
})
function init()
{
	//$("#div1").hide();
	$("#div2").hide();
	$("#div3").hide();
	$("#div4").hide();

	//$("#div1").fadeIn("slow");//fadeIn(1000,"slow",function)
	//$("#div1").fadeOut(500);//fadeIn(1000,"slow",function)
	$("#div2").fadeIn(1000);
	$("#div3").fadeIn(2000);
	$("#div4").fadeIn(3000);

	$("#div5").fadeOut(3500);
	$("#div4").fadeOut(4000);
	$("#div3").fadeOut(5000);
	$("#div2").fadeOut(6000);
	//$("#div1").fadeOut(7000);

	//events
	$("#btn").click(function()
	{
		$("#div1").fadeToggle("slow");		
	})

}