$(document).ready(function(){

	function close(vm, expandedClass, func) {
		$(vm).removeClass( expandedClass )

		if ( func ) {
			func()
		}
	}

	function open( vm, expandedClass, func ) {
		$(vm).addClass( expandedClass )

		if ( func ) {
			func()
		}
	}

	$(".popup__close").click(function() {
		close( $(this).attr("data-class") )
	})

	$(".popup-wrapper").click(function() {
		close( $(this).attr("data-class") )

	}).children().click(function(e) {
		e.stopPropagation
		return false
	})

	

	$("body").on("click", ".trigger", function(e) {
		e.preventDefault()
		console.log("reacion")
		open( $(`#${ $(this).attr("data-modal") }`), $(this).attr("data-class"), null )
	})

	$("body").on("click", ".trigger-close", function(e) {
		e.preventDefault()
		close( $(`#${ $(this).attr("data-parent-id") }`), $(this).attr("data-close"), null )
	})


})