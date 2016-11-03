//	Team R^2
//	Rina Narciso
//	Rosanne Wong
//	IAT 339 D101 - P02 Company

// focus on image thumbnail on click
$(document).ready(function(){
	$(".img-thumbnail").click(
		function(clickEvent){
			clickEvent.preventDefault();
			var image = $(this).attr("href");
			$(".img-main").attr("src", image); 
			var image = document.getElementsByClassName(".img-thumbnail");
		}
	);
});