$(document).ready(function(){

	linesPosition()

	function linesPosition() {
		let padding = parseInt($(".header__container").css("paddingLeft"), 10)
		let width 	= $(".header__container").width() + ( padding * 2 )
		let bgLeft
		let lineSize

		if ( width > 960 ) {
			bgLeft 	 = $(".header__container").offset().left + padding
			lineSize = (width - (padding*2)) / 6
		}

		if ( width < 960 || width === 960 && width > 720 ) {
			bgLeft 	 = $(".header__container").offset().left
			lineSize = width / 6
		}

		if ( width < 720 || width === 720 && width > 412 ) {
			bgLeft 	 = $(".header__container").offset().left
			lineSize = width / 6
		}

		if ( width < 412 || width === 412 ) {
			bgLeft 	 = 103
			lineSize = 103
		}

		$("body").css({ "background-size": `${ lineSize }px 100%`, "background-position": `left ${ bgLeft }px top,left 5px bottom,left 5px center` })
	}

	$(window).on('resize', function(){
		linesPosition()
	});

	/* VENDOR functions and helpers */

	function validation(vm) {
		let validation = true
		$(vm).each(function(){
			$(this).find($("input, textarea")).each(function() {
				$(this).parent().removeClass("main-input--validate")
				if ( $(this).attr("type") !== "file" && !$(this).val() && $(this).attr("data-validate") === "required" ) {
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
		},

		client( vm ) {
			const links = [ ...eval($(vm).attr("data-links")) ]
			const year 	= $(vm).attr("data-year")
			const img 	= $(vm).attr("data-img")

			if (!links || !year || !img) return 

			$(".clients__popup img").attr({ src: img })
			$("#client-year").html(year)

			$(".clients__products").html("")
			links.forEach(element => {
				let html = `
					<li class="clients__product-item"><a href="${ element.link }" class="header-section__product-link"> ${ element.name } </a></li>
				`
				$(".clients__products").append(html)
			});
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