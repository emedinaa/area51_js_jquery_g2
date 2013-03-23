var state=false;
$(document).ready(function()
{
	init();
})
function init()
{
	//inicializar variables
	//eventos
	//$("#div1").click(click_handler);
	$("#div1").bind("click",click_handler);
	$("#div2").bind("mouseenter",mouseenter_handler)
	$("#div2").bind("mouseleave",mouseleave_handler)
	//$("#div1").unbind();
}
function click_handler(e)
{
	if(!state)//==false
	{
		$("#div1").html("ON");
		$("#div1").css("background-color","gray")
		
		$("#div2").unbind();
		state=true;
	}else
	{
		$("#div1").html("OFF");
		$("#div1").css("background-color","orange")

		$("#div2").bind("mouseenter",mouseenter_handler)
		$("#div2").bind("mouseleave",mouseleave_handler)
		state=false;
	}
}
function mouseenter_handler(e)
{
	$(e.target).css("width","250px");
	$(e.target).css("height","250px");
}
function mouseleave_handler(e)
{
	$(e.target).css("width","200px");
	$(e.target).css("height","200px");
}

