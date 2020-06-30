$(window).on("load", function() {
    $("#preloader").fadeOut(500);
    var t = $(".gallery").isotope({});
    setTimeout(() => {
        console.log("all");
        t.isotope({ filter: "*" });
    }, 2000);
    $(".gallery").isotope({
        itemSelector: ".item-img",
        transitionDuration: "0.5s"
    }),
    $(".gallery .single-image").fancybox({
        transitionIn: "elastic",
        transitionOut: "elastic",
        speedIn: 600,
        speedOut: 200,
        overlayShow: !1
    }),
    $(".filtering").on("click", "button", function() {
        var a = $(this).attr("data-filter");
        console.log({ a });
        t.isotope({ filter: a });
    }),
    $(".filtering").on("click", "button", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
    });
});
