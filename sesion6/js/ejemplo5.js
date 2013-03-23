$(document).ready(function()
{
	init();
})
function init()
{
	$("#div1").animate({width:"300px", opacity:"0.6"},2000); 
	$("#div1").animate({height:"300px",opacity:"0.3"},1000);
	$("#div1").animate({height:"150px",opacity:"0.6"},500); 
	$("#div1").animate({width:"150px",opacity:"1"},100); 
}