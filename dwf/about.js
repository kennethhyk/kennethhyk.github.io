$( document ).ready(function () {
	slideFromTop();
	setTimeout(function() {
		$('.acknowledgement-content').waypoint(function() {
			console.log("hit");
			$('.leftMenu').toggleClass("flip");
			flip();
			jsOdd();
			jsEven();
		});
	}, 500);
});

slideFromTop = function () {
	var el = document.querySelectorAll('.acknowledgement-container');
	anime({
		targets: el,
		translateY: [-300, -50],
		translateX: [-50, -50],
		opacity: [0, 1],
		elasticity: 0,
		duration: 500,
		delay: 300,
		easing: 'easeInOutQuad'
	});
}

jsOdd = function () {
	var el = document.querySelectorAll('.js_odd');
	anime({
		targets: el,
		translateX: [1000, 0],
		opacity: [0, 1],
		elasticity: 0,
		duration: 500,
		delay: 300,
		easing: 'easeInOutQuad'
	});
}

jsEven = function () {
	var el = document.querySelectorAll('.js_even');
	anime({
		targets: el,
		translateX: [-1000, 0],
		opacity: [0, 1],
		elasticity: 0,
		duration: 1000,
		easing: 'easeInOutQuad'
	});
}

flip = function () {
	if ($('#controllerSVG').attr("src") == "assets/Video_Game_Controller.svg") {
		$('#controllerSVG').attr("src", "assets/Video_Game_Controller_black.svg");
	} else if ($('#controllerSVG').attr("src") == "assets/Video_Game_Controller_black.svg") {
		$('#controllerSVG').attr("src", "assets/Video_Game_Controller.svg");
	}

	if ($('#designSVG').attr("src") == "assets/Drafting_Compass.svg") {
		$('#designSVG').attr("src", "assets/Drafting_Compass_black.svg");
	} else if ($('#designSVG').attr("src") == "assets/Drafting_Compass_black.svg") {
		$('#designSVG').attr("src", "assets/Drafting_Compass.svg");
	}

	if ($('#infoSVG').attr("src") == "assets/Info.svg") {
		$('#infoSVG').attr("src", "assets/Info_black.svg");
	} else if ($('#infoSVG').attr("src") == "assets/Info_black.svg") {
		$('#infoSVG').attr("src", "assets/Info.svg");
	}
}