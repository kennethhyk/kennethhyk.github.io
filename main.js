$(document).ready(function(){
    timeline();
    $(window).scroll(function(){
        console.log($(window).scrollTop())
    })
//    $(window).on('keyup keypress click', function(e) {
//        $('.scroll-to-view').addClass('fadeOut');
//    })
    $(function(){
        $("#intro").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 100,
        });
    });
    $('.scroll-to-view').delay(31980).queue(function(){
        $('.scroll-to-view').addClass('fadeOut');
    })
})

function timeline() {
    var controller = new ScrollMagic.Controller();
    //Hi, I m Kenneth.
    var zoomOut = new TweenMax.to('.intro', 0.5, {
        scale: 0
    });
    new ScrollMagic.Scene({
            duration: 1000, 
            offset: 0,
            reverse: true
        })
        .setTween(zoomOut)
        .addTo(controller);
    //laptop
    new ScrollMagic.Scene({
            duration: 100000, 
            offset: 1100,
            reverse: true
        })
        .setClassToggle("#mac", "show")
        .addTo(controller);
    
    new ScrollMagic.Scene({
            duration: 100000, 
            offset: 1000,
            reverse: true
        })
        .setClassToggle(".intro, .scroll-to-view", "fade")
        .addTo(controller);
    
    new ScrollMagic.Scene({
            duration: 1000, 
            offset: 2000,
            reverse: true
        })
        .setClassToggle("#mac", "shake-manual")
        .addTo(controller);
    
    var zoom = new TweenMax.to('#mac', 0.5, {
        scale: 3.5
    });
    new ScrollMagic.Scene({
            duration: 1000, 
            offset: 3000,
            reverse: true
        })
        .setClassToggle("#mac", "snap")
        .setTween(zoom)
        .addTo(controller)
		
		new ScrollMagic.Scene({
					duration: 17000, 
					offset: 4000,
					reverse: true
			})
			.setClassToggle("#percentage-bar", "loaded")
			.addTo(controller)
    
    new ScrollMagic.Scene({
            duration: 18000, 
            offset: 4000,
            reverse: true
        })
        .setClassToggle("#mac", "snap")
        .addTo(controller);
}