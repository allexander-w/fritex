$(document).ready(function(){

	/* VENDOR functions and helpers */

	function validation(vm) {
		let validation = true
		$(vm).each(function(){
			$(this).find($("input, textarea")).each(function() {
				$(this).parent().removeClass("main-input--validate")
				if ( $(this).attr("type") !== "file" && !$(this).val() ) {
					$(this).parent().addClass("main-input--validate")
					validation = false
				}
			})
		})
		return validation
	}

	function getPayload( vm ) {
		let payload = {}

		$(vm).each(function(){
			$(this).find($("input, textarea")).each(function() {
				payload[$(this).attr("data-prop")] = $(this).val()
			})
		})

		return payload
	}

	const helpers = {
		vacancy( vm ) {
			$("#vacancy").val( $(vm).attr("data-vacancy") )
		}
	}

	function close(vm, expandedClass, func) {
		$(vm).removeClass( expandedClass )

		$("html").css({"overflow-y": "scroll"})

		if ( func ) {
			func()
		}
	}

	function open( vm, expandedClass, func, clicked ) {
		$(vm).addClass( expandedClass )

		$("html").css({"overflow-y": "hidden"})

		if ( func ) {
			func(clicked)
		}
	}

	/* Event listeners */

	$("body").on("click", ".trigger", function(e) {
		e.preventDefault()

		let func = null
		
		if ( $(this).attr("data-func") && helpers[$(this).attr("data-func")] ) {
			func = helpers[$(this).attr("data-func")]
		}
		open( $(`#${ $(this).attr("data-modal") }`), $(this).attr("data-class"), func, this )
	})

	$("body").on("click", ".trigger-close", function(e) {
		e.preventDefault()
		close( $(`#${ $(this).attr("data-parent-id") }`), $(this).attr("data-close"), null )
	})


	/** 
	 * ОТПРАВКА ДАННЫХ 
	 * Задать вопрос валидация и отправка
	 * 
	*/

	$(".question-send").click(function(e) {
		e.preventDefault()

		if ( !validation($("#question-form")) ) return false
		let payload = getPayload($("#question-form"))
		
		/* Готовый payload с формы */
		console.log( payload )
	})

	$(".vacancies-send").click(function(e){
		e.preventDefault()

		if( !validation($("#vacancies-form")) ) return false
		let payload = getPayload($("#vacancies-form"))

		console.log( payload )
	})
	

})