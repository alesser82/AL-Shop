const $ = require( "jquery" );

const functions = {
    displayCategoryList: () => {
        $('nav button .position-absolute').fadeIn(300);
    },
    hideCategoryList: () => {
        $('nav button .position-absolute').fadeOut(300);
    },
    scrollToSearch: () => {
        $('html, body').animate({
            scrollTop: 0
        }, 300, () => {
            setTimeout(() => {
                $('header form input').focus();
            }, 100);
        });
    },
    init: async () => {
        functions.hideCategoryList();
    }
};

const events = () => {
    $('nav button').hover(function () {
        functions.displayCategoryList();
    });

    $('nav button').mouseleave(function () {
        functions.hideCategoryList();
    });

    $('.search-btn').click(function (e) {
        e.preventDefault();
        functions.scrollToSearch();
    });
};

exports.functions = functions;
exports.events = events;