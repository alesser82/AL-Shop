$(document).ready(function () {

    screenSizeHandler();

    $(window).resize(function () {

        screenSizeHandler();

        searchInput.placeholderHandler();
        
    });

});