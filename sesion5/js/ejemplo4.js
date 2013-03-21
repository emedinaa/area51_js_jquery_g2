var standarW=600;
var standarH=600;

$(document).ready(function()
{
	$(window).resize(resize_handler);
})
function  resize_handler(e)
{
	console.log("resize "," w ",$(window).width(), 
		"H" ,$(window).height());
	var pW=$(window).width()/standarW;
	var pH=$(window).height()/standarH;

	$("#mydiv").width(200*pW+"px");
	$("#mydiv").height(200*pW+"px");
}