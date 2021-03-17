let navbar = {
    functions: {
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
        init: () => {
            navbar.functions.hideCategoryList();
        }
    },
    events: () => {
        $('nav button').hover(function () {
            navbar.functions.displayCategoryList();
        });

        $('nav button').mouseleave(function () {
            navbar.functions.hideCategoryList();
        });

        $('.search-btn').click(function (e) {
            e.preventDefault();
            navbar.functions.scrollToSearch();
        });
    }
}