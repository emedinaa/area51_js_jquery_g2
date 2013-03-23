$(document).ready(function()
{
	init();
})
function init()
{
	//slideDown ---------------
	/*$("#div2").hide();
	$("#div1").click(function()
	{
		$("#div2").slideDown(2000);
	})*/
	//slideUp--------------------
	/*$("#div1").click(function()
	{
		$("#div2").slideUp(2000);
	})*/

	$("#div1").click(function()
	{
		$("#div2").slideToggle(1000);
	})
}