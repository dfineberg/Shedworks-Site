
var accordionClosed = true;

$(function(){
	$(".accordion").accordion({
		collapsible: true,
		active: false,
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