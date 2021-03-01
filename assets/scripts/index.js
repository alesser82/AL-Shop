$(document).ready(function () {

    navbar.hideCategoryList();

    screenSizeHandler();

    searchInput.placeholderHandler();

    $(window).resize(function () {

        screenSizeHandler();

        searchInput.placeholderHandler();
    });

    $('nav button').hover(function () {
        navbar.displayCategoryList();
    });

    $('nav button').mouseleave(function () {
        navbar.hideCategoryList();
    });

});