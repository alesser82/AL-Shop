$(document).ready(function () {

    screenSizeHandler();

    searchInput.placeholderHandler();

    $(window).resize(function () {

        screenSizeHandler();

        searchInput.placeholderHandler();
    });

});