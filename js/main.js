
var accordionClosed = true;

$(function(){
	$(".accordion").accordion({
		collapsible: true,
		active: false,
		animate: 200,
		beforeActivate: function(event, ui) {
			if(accordionClosed){
				$(".accordionToggle").html("-");
			}else{
				$(".accordionToggle").html("+");
			}

			accordionClosed = !accordionClosed;
		}
	});
});