$(document).ready(function(){

    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("link--active");
        }
    });

    $(".dropdown").each(function() {

        $(this).children(".dropdown__header").click( () => {

            $(this).children(".dropdown__header").children(".dropdown__arrow").toggleClass("rotated")
            $(this).children(".dropdown__content").slideToggle();
  
        })

    })
    
});
