var transition;
var transitionState = 0;

$(document).ready(function() {
	$("#recordplayer").on("mouseenter", function() {
		transition = setTimeout(function() {
			$(".open-screen").css("opacity", "0");
			$(".open-screen").css("pointer-events", "none");
			$(".about-page").css("display", "flex");
			transitionState = 1;
		}, 5000);
	})

	$("#recordplayer").on("mouseleave", function() {
		if (transitionState === 0) {
			$(".open-screen").css("opacity", "1");
			$(".about-page").css("display", "none");
			clearTimeout(transition);
			console.log("Stop");
		}
	})
})