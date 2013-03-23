/*
	@autor: emedina

	Referencias
	http://www.w3.org/wiki/CSS/Properties/background-image
*/
$(document).ready(function()
{
	console.log("ready");
	init();
})
function init()
{
	var url='url("'+"assets/images/logo.jpg" +'")';
	$("#div1").css("background-image",url);

	$("#div1").css("opacity","0.1")
	$("#div1").animate({left:'200px',opacity:1});
	//$("#div1").animate({opacity:0.1});
	//background-image: url("images/bg.png");
	
}