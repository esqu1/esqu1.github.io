new WOW().init();
$(function(){
	$.stellar({
		horizontalScrolling: false,
	});
});

$(document).ready(function(){
	$("li.dropdown").hover(function(){
		$(this.childNodes[3]).css("visibility","visible"); 
		var d = this.childNodes[3].getElementsByTagName("a");
		$(d[d.length - 1]).css("border", "2px solid #c5e8e0");
		$(d[d.length - 1]).css("border-radius","0px 0px 10px 10px");
	}, function(){
		$(this.childNodes[3]).css("visibility","hidden");
	});
})