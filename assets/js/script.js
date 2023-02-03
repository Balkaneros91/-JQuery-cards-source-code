$(document).ready(function () {


	$("#stream1_btn").on("click", function () { // on
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").click(function () { // .click 
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function () { // is same as the previous .ON
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream3").addClass('highlight_stream');
	});
	$("#stream3_btn").mouseenter("click", function () { // mouseenter
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream3").addClass('highlight_stream');
	});
	$("#stream3_btn").mouseleave("click", function () { // mouseleave
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream3").addClass('highlight_stream');
	});

	$("#stream1_btn").on(function () { 			// show();
		$(".stream1").show();
		$(".stream1").show('slow');
		$(".stream1").show('medium');
		$(".stream1").show('fast');
		$(".stream1").show(1000);
	});

	$("#stream1_btn").on(function () { 			// hide(); element to vanish
		$(".stream1").hide();
		$(".stream1").hide('slow');
		$(".stream1").hide('medium');
		$(".stream1").hide('fast');
		$(".stream1").hide(1000);
	});

	$("#stream1_btn").on(function () { 			
		$(".stream1").toggle();
		$(".stream1").toggle(1000);
	});

	$("#stream1_btn").on(function () { 		
		$(".stream1").slideDown();
		$(".stream1").slideDown(1000);
	});

	$("#stream1_btn").on(function () { 			
		$(".stream1").slideUp();
		$(".stream1").slideUp(1000);
	});

	$("#stream1_btn").on(function () { 			
		$(".stream1").slideToggle();
		$(".stream1").slideToggle(1000);
	});

	$("#stream1_btn").on(function () { 			
		$(".stream1").fadeIn();
		$(".stream1").fadeIn(1000);
	});

	$("#stream1_btn").on(function () { 			
		$(".stream1").fadeOut();
		$(".stream1").fadeOut(1000);
	});

	$("#stream1_btn").on(function () { 			
		$(".stream1").fadeToggle();
		$(".stream1").fadeToggle(1000);
	});

	$("#stream1_btn").on(function () { 			
		$(".stream1").fadeTo(1000, 0.5);
	});

	// $('#myButton').removeClass('blueBox');
	// $('#myButton').addClass('border');

	$('#myButton').removeClass('blueBox').addClass('border');

	$('p').css('color', 'blue').slideUp(2000).slideDown(2000);
	$('a').attr('href', 'http://www.example.com');

});

