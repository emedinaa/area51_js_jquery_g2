$(document).ready(function()
{
	console.log("ready");
	var arr=["lunes", "martes", "miercoles"];
	var result="";

	for(var i=0;i< arr.length;i++)
	{
		result+='<div class="mydiv2">'+arr[i]+'</div>'
		console.log("que esta pasando ",result);
		//$("#container2").html(result);
	}
	$("#container2").html(result);
	/*
		<div class="mydiv2">BOX</div>
		<div class="mydiv2">BOX</div>
		<div class="mydiv2">BOX</div>
		<div class="mydiv2">BOX</div>
	*/
});