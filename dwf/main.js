$( document ).ready(function () {
	hovering();
	slideIn();
	$('.bgdiv').waypoint(function() {
		phoneSlideLeft();
		phoneSlideRight();
	});
});

hovering = function () {
	var el = document.querySelectorAll('.bigphone');
	anime({
		targets: el,
		translateY: [-20, -50],
		direction: 'alternate',
		duration: 5000,
		loop: true,
		easing: 'easeInOutQuad'
	});
}

slideIn = function () {
	var el = document.querySelectorAll('.bgdiv h1');
	anime({
		targets: el,
		translateX: [-1000, 0],
		opacity: [0, 0.7, 1],
		duration: 500,
		elasticity: 30
	});
}

phoneSlideLeft = function () {
	var el = document.querySelectorAll('.leftPhone img');
	anime({
		targets: el,
		translateX: [-100, 0],
		opacity: [0, 1],
		duration: 5000,
		elasticity: 30
	});
}

phoneSlideRight = function () {
	var el = document.querySelectorAll('.rightPhone img');
	anime({
		targets: el,
		translateX: [100, 0],
		opacity: [0, 1],
		duration: 5000,
		elasticity: 30
	});
}