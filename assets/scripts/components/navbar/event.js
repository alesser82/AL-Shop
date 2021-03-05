$(document).ready(function () {
    
    navbar.hideCategoryList();

    $('nav button').hover(function () {
        navbar.displayCategoryList();
    });

    $('nav button').mouseleave(function () {
        navbar.hideCategoryList();
    });

    $('.search-btn').click(function (e) {
        e.preventDefault();
        navbar.scrollToSearch();
    });

});