$(document).ready(function(){

	function close() {
		$(".popup-wrapper").addClass("dn")
	}

	function open() {
		$(".popup-wrapper").removeClass("dn")
	}

	$(".vacancies__btn").click(function() {
		open()
		$("#vacancy").attr({"value": $(this).attr("data-vacancy")})
	})
	$(".popup__close").click(function() {
		close()
	})
	$(".popup-wrapper").click(function() {
		close()
	}).children().click(function(e) {
		e.stopPropagation
		return false
	})

	$(".clients__block").click(function() {
		open()
	})


})