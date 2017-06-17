var transition;
var transitionState = 0;

// MOBILE
if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

	$(document).ready(function() { // jQuery

		$("#recordplayer").on("touchstart", function() {  // When user begins press down on record player
			
			// Audio Trigger
			$("#song").trigger('play');

			// Loading Bar
			$(".progress-bar").css("width", "100%");
			$(".progress-bar").css("transition", "width 4s ease-in");

			// Resetting the animation for mobile press-and-hold
			$("#recordplayer #needle").css("transition", "all 0.5s ease-in-out");
			$("#recordplayer #needle").css("transform", "rotate(30deg)");
			$("#recordplayer #vinyl").css("transition", "none 3s ease-in-out");
			$("#recordplayer #vinyl").css("transition", "transform 9s ease-in-out");
			$("#recordplayer #vinyl").css("transform", "rotate(1080deg)");

			// After user holds down record player for minimum of 4 seconds
			transition = setTimeout(function() {
				
				// Hides landing page and makes it untouchable
				$(".open-screen").css("opacity", "0");
				$(".open-screen").css("pointer-events", "none");
				$(".open-screen").css("z-index", "-10");

				// Main Page Background and Element Animation Sequence
				$(".main-page").css("margin-top", "-15%");
				$("#main-page-title, #main-page-subtitle, #discoball").css("opacity", "1");
				setTimeout(function() {
					$("body").css("overflow-y", "visible");
					$("#down-arrow").css("opacity", "0.8");
					$("#down-arrow").css("animation-name", "blink");
				}, 5500);
				$("#left-side").css("transform", "translateX(0)");
				$("#right-side").css("transform", "translateX(0)");
				$(".about-page").css("display", "flex");

				// Showing Play/Pause button
				$(".audio-controls").css("opacity", "1");
				$(".audio-controls").css("pointer-events", "auto");

				transitionState = 1;

			}, 4000);
		})

		$("#recordplayer").on("touchend", function() {  // Once user stops press down on mobile

			if (transitionState === 0) { // Check to make sure transition hasn't been completed
				
				// Stop song and reset playtime
				$("#song").trigger('pause');
				$("#song").prop("currentTime", 0);

				// Reset Loading Bar
				$(".progress-bar").css("width", "0%");
				$(".progress-bar").css("transition", "width 0s");

				// Stopping and resetting the animation for mobile press-and-hold
				$("#recordplayer #needle").css("transition", "none");
				$("#recordplayer #needle").css("transform", "rotate(0deg)");
				$("#recordplayer #vinyl").css("transition", "none");
				$("#recordplayer #vinyl").css("transform", "rotate(0deg)");

				// If user hasn't completed transition, reset setTimeout() timer
				clearTimeout(transition);
			}

		})

		// Pause and change to play symbol
		$("#pause-button").on("click", function() {
			$("#song").trigger('pause');
			$("#pause-button").css("display", "none");
			$("#play-button").css("display", "inline");

		})

		// Play and change to pause symbol
		$("#play-button").on("click", function() {
			$("#song").trigger('play');
			$("#play-button").css("display", "none");
			$("#pause-button").css("display", "inline");
		})

	})
}

//DESKTOP
else {

	$(document).ready(function() {  // jQuery

		$("#recordplayer").on("mouseenter", function() {  // When user hovers over record player
			
			// Audio Trigger
			$("#song").trigger('play');

			// Loading Bar
			$(".progress-bar").css("width", "100%");
			$(".progress-bar").css("transition", "width 4s ease-in");

			// After user holds down record player for minimum of 4 seconds
			transition = setTimeout(function() {

				// Hides landing page and makes it untouchable
				$(".open-screen").css("opacity", "0");
				$(".open-screen").css("pointer-events", "none");
				$(".open-screen").css("z-index", "-10");

				// Main Page Background and Element Animation Sequence
				$("#main-page-title, #main-page-subtitle, #discoball").css("opacity", "1");
				setTimeout(function() {
					$("body").css("overflow-y", "visible");
					$("#down-arrow").css("opacity", "0.8");
					$("#down-arrow").css("animation-name", "blink");
				}, 5500);
				$("#left-side").css("transform", "translateX(0)");
				$("#right-side").css("transform", "translateX(0)");
				$(".about-page").css("display", "flex");

				// Showing Play/Pause button
				$(".audio-controls").css("opacity", "1");
				$(".audio-controls").css("pointer-events", "auto");

				transitionState = 1;

			}, 4000);
		})

		$("#recordplayer").on("mouseleave", function() {  // When user leaves hover state

			if (transitionState === 0) {  // Check to make sure transition hasn't been completed

				// Stop song and reset playtime
				$("#song").trigger('pause');
				$("#song").prop("currentTime", 0);

				// Reset Loading Bar
				$(".progress-bar").css("width", "0%");
				$(".progress-bar").css("transition", "width 0s");

				// If user hasn't completed transition, reset setTimeout() timer
				clearTimeout(transition);
			}
		})

		// Pause and change to play symbol
		$("#pause-button").on("click", function() {
			$("#song").trigger('pause');
			$("#pause-button").css("display", "none");
			$("#play-button").css("display", "inline");

		})
		
		// Play and change to pause symbol
		$("#play-button").on("click", function() {
			$("#song").trigger('play');
			$("#play-button").css("display", "none");
			$("#pause-button").css("display", "inline");
		})
		
	})
}