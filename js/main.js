$(document).ready(function(){
	
	$(".js-service-section").waypoint(function(direction){
		if (direction == "down"){
			$("nav").addClass("sticky");
			
		} else {
			$("nav").removeClass("sticky");
		}
		
	});
	
	
	// mixitup 
	var mixer = mixitup('.container');
	

	
});


function openNav(){
	document.getElementById("myNav").style.width="100%";
}
function closeNav(){
	document.getElementById("myNav").style.width="0%";
}