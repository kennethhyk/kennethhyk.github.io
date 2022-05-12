$( document ).ready(function () {
	slideFromTop();
	animateSprite();
});

slideFromTop = function () {
	var el = document.querySelectorAll('.designLandingPage');
	anime({
		targets: el,
		translateY: [-300, -50],
		translateX: [-50, -50],
		opacity: [0, 1],
		elasticity: 0,
		duration: 1000,
		easing: 'easeInOutQuad'
	});
}

animateSprite = function () {
	var el = document.querySelectorAll('.sprite');
	var timeline = anime.timeline({
		direction: 'alternate',
		duration: 1000,
		loop: true
	});
	timeline
		.add({
			targets: el,
		    translateY: [0, -50],
			borderRadius: ['5em', '0em'],
			backgroundColor: ['#F5D227', '#2f2f2f'],
		    easing: 'easeInOutQuad'
		})
		.add({
			targets: el,
		    rotate: '-0.5turn',
		    easing: 'easeInOutQuad',
		    backgroundColor: ['#2f2f2f', '#F5D227'],
		    translateY: [-50, 0]
		})
		.add({
			targets: el,
		    scaleX: 0.5,
		    backgroundColor: ['#F5D227', '#278EF5'],
		    easing: 'easeInOutQuad'
		})
}