$(document).ready(function(){

	function close() {
		$(".popup-wrapper").addClass("dn")
	}

	function open( vm ) {
		$(vm).removeClass("dn")
	}

	$(".popup__close").click(function() {
		close()
	})
	$(".popup-wrapper").click(function() {
		close()
	}).children().click(function(e) {
		e.stopPropagation
		return false
	})

	$("body").on("click", ".trigger", function(e) {
		e.preventDefault()
		open( $(`#${ $(this).attr("data-modal") }`) )
	})


})