$(document).ready(function () {
    $("#design-text").hide();
    $("#design").click(function () {
        $("#design-text").slideToggle("slow");
        $("#design-img").slideToggle("slow");
    });

    $("#development-text").hide();
    $("#development").click(function () {
        $("#development-text").slideToggle("slow");
        $("#development-img").slideToggle("slow");
    });

    $("#product-text").hide();
    $("#product").click(function () {
        $("#product-text").slideToggle("slow");
        $("#product-img").slideToggle("slow");
    });

    // Portfolio section
    $(".coolStuffs").each(function () {
        $(this).find("p").hide()
        $(this).animate({ opacity: 1 });
        $(this).hover(function () {
            $(this).stop().animate({
                opacity: .4
            }, 200);
            $(this).find("p").fadeIn();

        }, function () {
            $(this).stop().animate({
                opacity: 1
            }, 400)
            $(this).find("p").fadeOut();
        });
    });
    $(".details").submit(function (event) {
        var first_1 = $("#mce-FNAME").val();
        var second_2 = $("#mce-EMAIL").val();
        if (first_1 && second_2 != "") {
            $("mc-embedded-subscribe-form").submit();
            alert("Thank you " + first_1 + " for reaching out to us." + " " + "Your message has been received.");
            $("mc-embedded-subscribe-form").reset();
        } else {
            alert("Error!!! Please enter all the details correctly" + first_1 + second_2);
        }
        event.preventDefault();
    });
});