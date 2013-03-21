/*
//Eventos
 1. click
 2. dblclick
 3. mouseenter
 4. mouseleave

*/
$(document).ready(function()
{
	//iniclizar las variables
	//eventos

	/*$("#mydiv1").click(function()
	{
		alert("click");
	})*/
	$("#mydiv1").click(click_handler);
	$("#mydiv2").dblclick(dblclick_handler);
	$("#mydiv2").dblclick(dblclick_handler);

	$("#mydiv3").mouseenter(mouseenter_handler);
	$("#mydiv3").mouseleave(mouseleave_handler);

	$("#mydiv4").mouseenter(mouseenter2_handler);
	$("#mydiv4").mouseleave(mouseleave2_handler);

	$("#mydiv5").hover(mouseenter3_handler,mouseleave3_handler);

});

function click_handler(e)
{
	//alert("click ");
	console.log("click ","e "+e ,"e.target "+ e.target)
	console.log("e.target ",$(e.target),$(e.target).attr("id"));
	$(e.target).css("background-color","blue");
}
function dblclick_handler(e)
{
	alert("doble click ");
}
function mouseenter_handler()
{
	console.log("mousenter");
	$("#mydiv3").css("background-color","#d4d4d4");
	$("#mydiv3").css("width","105px");
	$("#mydiv3").css("height","105px");
}

function mouseleave_handler()
{
	console.log("mouseleave");
	$("#mydiv3").css("background-color","orange");
	$("#mydiv3").css("width","100px");
	$("#mydiv3").css("height","100px");
}
function mouseenter2_handler()
{
	transformScale($("#mydiv4"),100,100,1.2);
}

function mouseleave2_handler()
{
	transformScale($("#mydiv4"),100,100,1);
}
function mouseenter3_handler()
{
	changeColor($("#mydiv5"),"blue");
}
function mouseleave3_handler()
{
	changeColor($("#mydiv5"),"orange");
}
//-----------------------------------------------
function transformScale(_obj,_w,_h, _scale)//0-1
{
	/*var w= _obj.width();
	var h= _obj.height();
	*/
	var nw = _w*_scale;//1.5 0.5
	var nh = _h*_scale;

	_obj.css("width",nw+"px");
	_obj.css("height",nh+"px");	
}
function changeColor(_obj,_color)
{
	_obj.css("background-color",_color);	
}