//	Team R^2
//	Rina Narciso
//	Rosanne Wong
//	IAT 339 D101 - P02 Company

// toggles menu icon for smaller screens
$(document).ready(function(){
    $(".nav-toggle").click(function(){
        $(".mobile-nav").slideToggle("slow");
    });
});

// toggles review form
$(document).ready(function(){
    $(".btn-calltoaction.review-btn").click(function(){
        $(".review-form").slideToggle();
    });
});