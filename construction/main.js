$(function () {
    $(".btn-mob").click(function () {
        $(this).toggleClass("active");
        $(".wrap-2 ul").slideToggle();
    })

    $(".banner .knowmore-btn").click(function () {
        $(".banner p.extra").slideDown()
        $(".banner .knowmore-btn").hide()
        $(".banner .hide-btn").show()
    })
    $(".banner .hide-btn").click(function () {
        $(".banner p.extra").slideUp()
        $(".banner .knowmore-btn").show()
        $(".banner .hide-btn").hide()
    })


    $(".wrap-3 .knowmore-btn").click(function () {
        $(".wrap-3 p.extra").slideDown()
        $(".wrap-3 .knowmore-btn").hide()
        $(".wrap-3 .hide-btn").show()
    })
    $(".wrap-3 .hide-btn").click(function () {
        $(".wrap-3 p.extra").slideUp()
        $(".wrap-3 .knowmore-btn").show()
        $(".wrap-3 .hide-btn").hide()
    })


    $(".wrap-5 .mang .knowmore-btn").click(function () {
        $(".wrap-5 .mang p.extra").slideDown()
        $(".wrap-5 .mang .knowmore-btn").hide()
        $(".wrap-5 .mang .hide-btn").show()
    })
    $(".wrap-5 .mang .hide-btn").click(function () {
        $(".wrap-5 .mang p.extra").slideUp()
        $(".wrap-5 .mang .knowmore-btn").show()
        $(".wrap-5 .mang .hide-btn").hide()
    })

    $(".wrap-5 .reno .knowmore-btn").click(function () {
        $(".wrap-5 .reno p.extra").slideDown()
        $(".wrap-5 .reno .knowmore-btn").hide()
        $(".wrap-5 .reno .hide-btn").show()
    })
    $(".wrap-5 .reno .hide-btn").click(function () {
        $(".wrap-5 .reno p.extra").slideUp()
        $(".wrap-5 .reno .knowmore-btn").show()
        $(".wrap-5 .reno .hide-btn").hide()
    })


    $(".wrap-5 .arch .knowmore-btn").click(function () {
        $(".wrap-5 .arch p.extra").slideDown()
        $(".wrap-5 .arch .knowmore-btn").hide()
        $(".wrap-5 .arch .hide-btn").show()
    })
    $(".wrap-5 .arch .hide-btn").click(function () {
        $(".wrap-5 .arch p.extra").slideUp()
        $(".wrap-5 .arch .knowmore-btn").show()
        $(".wrap-5 .arch .hide-btn").hide();
    })

    $(".wrap-2 #search").click(function () {
        $(".wrap-2 input").css({ "transform": "scale(1)" });
        $(".wrap-2 #search").hide();
        $(".wrap-2 #cut").show();
    })

    $(".wrap-2 #cut").click(function () {
        $(".wrap-2 input").css({ "transform": "scale(0)" });
        $(".wrap-2 #cut").hide();
        $(".wrap-2 #search").show();
    })


    $(".wrap-6 .menu li:nth-child(2)").click(function () {
        $(".wrap-6 .last-2").fadeOut();
        $(".wrap-6 #palace").fadeOut();
        $(".wrap-6 #img2").addClass("col-12")
        $(".wrap-6 .first-2").fadeIn();
        $(this).addClass("active");
        $(".menu li:nth-child(1)").removeClass("active");
        $(".menu li:nth-child(3)").removeClass("active");
        $(".menu li:nth-child(4)").removeClass("active");
        $(".menu li:nth-child(5)").removeClass("active");
    })
    $(".wrap-6 .menu li:nth-child(3)").click(function () {
        $(".wrap-6 .last-2").fadeIn();
        $(".wrap-6 #palace").fadeOut();
        $(".wrap-6 #img2").addClass("col-12")
        $(".wrap-6 .first-2").fadeOut();
        $(this).addClass("active");
        $(".menu li:nth-child(1)").removeClass("active");
        $(".menu li:nth-child(2)").removeClass("active");
        $(".menu li:nth-child(4)").removeClass("active");
        $(".menu li:nth-child(5)").removeClass("active");

    })
    $(".wrap-6 .menu li:nth-child(4)").click(function () {
        $(".wrap-6 .last-2").fadeOut();
        $(".wrap-6 #palace").fadeOut();
        $(".wrap-6 #img2").addClass("col-12")
        $(".wrap-6 .first-2").fadeIn();
        $(this).addClass("active");
        $(".menu li:nth-child(1)").removeClass("active");
        $(".menu li:nth-child(3)").removeClass("active");
        $(".menu li:nth-child(2)").removeClass("active");
        $(".menu li:nth-child(5)").removeClass("active");

    })
    $(".wrap-6 .menu li:nth-child(5)").click(function () {
        $(".wrap-6 .last-2").fadeIn();
        $(".wrap-6 #palace").fadeOut();
        $(".wrap-6 #img2").addClass("col-12")
        $(".wrap-6 .first-2").fadeOut();
        $(this).addClass("active");
        $(".menu li:nth-child(1)").removeClass("active");
        $(".menu li:nth-child(3)").removeClass("active");
        $(".menu li:nth-child(4)").removeClass("active");
        $(".menu li:nth-child(2)").removeClass("active");

    })
    $(".wrap-6 .menu li:nth-child(1)").click(function () {
        $(".wrap-6 .last-2").fadeIn();
        $(".wrap-6 #palace").fadeIn();
        $(".wrap-6 #img2").removeClass("col-12")
        $(".wrap-6 .first-2").fadeIn();
        $(this).addClass("active");
        $(".menu li:nth-child(2)").removeClass("active");
        $(".menu li:nth-child(3)").removeClass("active");
        $(".menu li:nth-child(4)").removeClass("active");
        $(".menu li:nth-child(5)").removeClass("active");

    })
})