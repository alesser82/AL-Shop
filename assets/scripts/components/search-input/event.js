$(document).ready(() => {
    
    searchInput.placeholderHandler();

    $(window).resize(function () {
        searchInput.placeholderHandler();
    });

});