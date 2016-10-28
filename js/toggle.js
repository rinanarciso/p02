//	Team R^2
//	Rina Narciso
//	Rosanne Wong
//	IAT 339 D101 - P02 Company

// toggles menu icon for smaller screens
$(document).ready(function(){
    $(".menu-mobile").click(function(){
        $(".menu-mobile-links").slideToggle("slow");
    });
});

// toggles review form
$(document).ready(function(){
    $("#review-btn").click(function(){
        $(".review-form").slideToggle();
    });
});