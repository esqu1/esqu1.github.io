$("li.dropdown .dropdown-content a:last").css("border", "2px solid #c5e8e0");
$("li.dropdown .dropdown-content a:last").css("border-radius", "0px 0px 10px 10px");

function dropdown(){
	$("li.dropdown").hover(function(){
		$(this).find(".dropdown-content").fadeToggle(100); 
	}, function(){
		$(this).find(".dropdown-content").fadeToggle(100);
	});
}

$(document).ready(function(){
	new WOW().init();
	$(function(){
		$.stellar({
			horizontalScrolling: false,
		});
	});
	dropdown();
	$("li.dropdown .dropdown-content").hide();
})