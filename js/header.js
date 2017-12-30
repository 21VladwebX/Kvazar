$('document').ready(function(){

	var heightHeader = $('#header').height(); 	
	heightHeader = heightHeader;
	$('#main').css({"marginTop": "- " + heightHeader + "px"});
	// console.log(heightHeader);
	$('.navbar-brand').hover( function(){
		$('.Kvazar-logo').css({"color": "#dd47e5"});
		$('#star').css({"color": "#dd47e5", "opacity" : "1" });
	});

	$(window).scroll(function(){

		var scrolled = $(document).scrollTop();
		if(scrolled => 200){
			$('.up').css({"opacity" : "1" });
		}
		if(scrolled <= 200){
			// alert(2);
			$('.up').css({"opacity" : "0" });
		}

		console.log(scrolled);
	})

	var MaxScroll = 0;
	var numClick = 0;
	$('#up').click(function(){
		numClick = numClick + 1;
		if(numClick %2){
			MaxScroll = $(document).scrollTop();
			$('body').animate({scrollTop:0},500);
			$('#up').removeClass('up');
			$('#up').addClass('down');
		}
		else{
			// console.log(MaxScroll);
			$('body').animate({scrollTop: MaxScroll},500);
			$('#up').removeClass('down');
			$('#up').addClass('up');			
		}
	});

});