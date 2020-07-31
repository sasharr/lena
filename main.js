$(window).on('load', function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });

    $("#popup-open").on("click touch", function () {
        // event.preventDefault();
        $('.popup').css("display", "block")
    });

    $('#popup-close').on("click touch", function () {
        $('.popup').hide();
    });

    $(".popup").on("click touch", function (event) {
        if ($(event.target).closest(".popup-content").length) return;

        $('.popup').hide();
    });
});