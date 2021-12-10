$(document).ready(function(){

    function getRoute(x, y) {
        return x > y 
            ? "slideLeft"
            : "slideRight"
    }

    $(".about__history-year").each(function() {
        $(this).click(function(){
            let leftOffset      = $(this).offset().left - $('.about__history-years').offset().left + $('.about__history-years').scrollLeft()
            let currentPosCaret = parseInt($(".about__history-years-caret").css("left"), 10)

            $(".about__history-years-caret").css({ left: leftOffset + "px", width: $(this).width() + 16 + "px" })
    
            $(".about__history-year").removeClass("active")
            $(this).addClass("active")

            let routeClass = getRoute(currentPosCaret, leftOffset)

            $(`div[data-content]`).addClass(routeClass)
            $(`div[data-content]`).children().remove()

            $(`div[data-content]`).append($(`div[data-select="${ $(this).attr('id') }"]`).html())

            setTimeout(() => {
                $(`div[data-content]`).removeClass(routeClass)
            }, 300)

        })
    })

});