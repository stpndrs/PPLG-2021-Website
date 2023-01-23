$(".option-dropdown").click(function () {
    $(this).attr("tabindex", 1).focus();
    $(this).toggleClass("active");
    $(this).find(".dropdown-menu").slideToggle(300);
});

$(".option-dropdown").focusout(function () {
    $(this).find(".dropdown-menu").slideUp(300);
});

$(".option-dropdown .dropdown-menu li").click( function () {
    $(this).parents(".option-dropdown").find("span").text($(this).text());
    $(this).parents(".option-dropdown").find("input").attr("value", $(this).attr("id"));
});

$(".dropdown-navbar").click(function () {
    $(this).attr("tabindex", 1).focus();
    $(this).find(".dropdown-content-navbar").slideToggle(300);
});

$(".dropdown-navbar").focusout(function () {
    $(this).find(".dropdown-content-navbar").slideUp(300);
});

// Card action Galery
$(".card-body .card-action .like-icon").click(function () {
    $(this).toggleClass("bi-heart")
    $(this).toggleClass("bi-heart-fill")
    // console.log(1);
})

$(".modal-body .modal-image-action .like-icon").click(function () {
    $(this).toggleClass("bi-heart")
    $(this).toggleClass("bi-heart-fill")
    // console.log(1);
})
