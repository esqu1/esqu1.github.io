new WOW().init();
$(function(){
	$.stellar({
		horizontalScrolling: false,
	});
});

function dropdown(){
	$("li.dropdown").hover(function(){
		$(this).find(".dropdown-content").fadeToggle(100); 
		var d = this.childNodes[3].getElementsByTagName("a");
		$(d[d.length - 1]).css("border", "2px solid #c5e8e0");
		$(d[d.length - 1]).css("border-radius","0px 0px 10px 10px");
	}, function(){
		$(this).find(".dropdown-content").fadeToggle(100);
	});
}

$(document).ready(function(){
	dropdown();
	$("li.dropdown .dropdown-content").hide();
})