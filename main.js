var transition;
var transitionState = 0;

// MOBILE
if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	$(document).ready(function() {
		$("#recordplayer").on("touchstart", function() {
			$("#song").trigger('play');
			$(".progress-bar").css("width", "100%");
			$(".progress-bar").css("transition", "width 4s ease-in");
			// Resetting the animation for mobile press-and-hold
			$("#recordplayer #needle").css("transition", "all 0.5s ease-in-out");
			$("#recordplayer #needle").css("transform", "rotate(30deg)");
			$("#recordplayer #vinyl").css("transition", "none 3s ease-in-out");
			$("#recordplayer #vinyl").css("transition", "transform 9s ease-in-out");
			$("#recordplayer #vinyl").css("transform", "rotate(1080deg)");
			transition = setTimeout(function() {
				$(".open-screen").css("opacity", "0");
				$(".open-screen").css("pointer-events", "none");
				$(".open-screen").css("z-index", "-10");
				$("#main-page-title, #main-page-subtitle, #discoball").css("opacity", "1");
				setTimeout(function() {
					$("body").css("overflow-y", "visible");
					$("#down-arrow").css("opacity", "0.8");
					$("#down-arrow").css("animation-name", "blink");
				}, 5500);
				$("#left-side").css("transform", "translateX(0)");
				$("#right-side").css("transform", "translateX(0)");
				$(".about-page").css("display", "flex");
				$(".audio-controls").css("opacity", "1");
				$(".audio-controls").css("pointer-events", "auto");
				transitionState = 1;
			}, 4000);
		})

		$("#recordplayer").on("touchend", function() {
			if (transitionState === 0) {
				$("#song").trigger('pause');
				$("#song").prop("currentTime", 0);
				$(".progress-bar").css("width", "0%");
				$(".progress-bar").css("transition", "width 0s");
				// Stopping the animation for mobile press-and-hold
				$("#recordplayer #needle").css("transition", "none");
				$("#recordplayer #needle").css("transform", "rotate(0deg)");
				$("#recordplayer #vinyl").css("transition", "none");
				$("#recordplayer #vinyl").css("transform", "rotate(0deg)");
				clearTimeout(transition);
			}
		})

		$("#pause-button").on("click", function() {
			$("#song").trigger('pause');
			$("#pause-button").css("display", "none");
			$("#play-button").css("display", "inline");

		})

		$("#play-button").on("click", function() {
			$("#song").trigger('play');
			$("#play-button").css("display", "none");
			$("#pause-button").css("display", "inline");
		})

	})
}

//DESKTOP
else {
	$(document).ready(function() {
		$("#recordplayer").on("mouseenter", function() {
			$("#song").trigger('play');
			$(".progress-bar").css("width", "100%");
			$(".progress-bar").css("transition", "width 4s ease-in");
			transition = setTimeout(function() {
				$(".open-screen").css("opacity", "0");
				$(".open-screen").css("pointer-events", "none");
				$(".open-screen").css("z-index", "-10");
				$("#main-page-title, #main-page-subtitle, #discoball").css("opacity", "1");
				setTimeout(function() {
					$("body").css("overflow-y", "visible");
					$("#down-arrow").css("opacity", "0.8");
					$("#down-arrow").css("animation-name", "blink");
				}, 5500);
				$("#left-side").css("transform", "translateX(0)");
				$("#right-side").css("transform", "translateX(0)");
				$(".about-page").css("display", "flex");
				$(".audio-controls").css("opacity", "1");
				$(".audio-controls").css("pointer-events", "auto");
				transitionState = 1;
			}, 4000);
		})

		$("#recordplayer").on("mouseleave", function() {
			if (transitionState === 0) {
				$("#song").trigger('pause');
				$("#song").prop("currentTime", 0);
				$(".progress-bar").css("width", "0%");
				$(".progress-bar").css("transition", "width 0s");
				clearTimeout(transition);
			}
		})

		$("#pause-button").on("click", function() {
			$("#song").trigger('pause');
			$("#pause-button").css("display", "none");
			$("#play-button").css("display", "inline");

		})

		$("#play-button").on("click", function() {
			$("#song").trigger('play');
			$("#play-button").css("display", "none");
			$("#pause-button").css("display", "inline");
		})
		
	})
}