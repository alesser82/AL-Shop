const navbar = {
    'function': {
        'displayCategoryList': function () {
            $('nav button .position-absolute').fadeIn(300);
        },
        'hideCategoryList': function () {
            $('nav button .position-absolute').fadeOut(300);
        },
        'scrollToSearch': function () {
            $('html, body').animate({
                scrollTop: 0
            }, 300, () => {
                setTimeout(() => {
                    $('header form input').focus();
                }, 100);
            });
        },
        'init': async function () {
            this.hideCategoryList();
        }
    },
    'event': function () {
        $('nav button').hover(function () {
            navbar.function.displayCategoryList();
        });

        $('nav button').mouseleave(function () {
            navbar.function.hideCategoryList();
        });

        $('.search-btn').click(function (e) {
            e.preventDefault();
            navbar.function.scrollToSearch();
        });
    }
}

export default navbar;