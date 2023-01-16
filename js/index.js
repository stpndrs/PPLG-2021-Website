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

$(".navbar .container .dropdown").click(function () {
    $(this).attr("tabindex", 1).focus();
    $(this).find(".dropdown-content").slideToggle(300);  
})
