

$(document).ready(function(){

	function close() {
		$(".popup-wrapper").addClass("dn")
	}

	function open(vm) {
		$(".popup-wrapper").removeClass("dn")
		$("#vacancy").attr({"value": $(vm).attr("data-vacancy")})
	}

	$(".vacancies__btn").click(function() {
		open(this)
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


})