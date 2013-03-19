$(document).ready(function()
{
	console.log("ready");
	$("#btn").click(function()
	{
		//resetear
		//$("#box1").css("background-color","orange");
		//	$("#box2").css("background-color","orange");
		//$("#box3").css("background-color","orange");
		changeColor($("#box1"),"orange");
		changeColor($("#box2"),"orange");
		changeColor($("#box3"),"orange");
	})
	
	$("#box1").click(function()
	{
		$(this).css("background-color","#ff00ff");
		console.log("width div ",$(this).width());
	})
	$("#box2").click(function()
	{
		$(this).css("background-color","blue");
	})
	$("#box3").click(function()
	{
		$(this).css("background-color","white");	
	})
})

function changeColor(_obj, _color)
{
	_obj.css("background-color",_color); //$("#xxxx")
}