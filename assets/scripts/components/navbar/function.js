const navbar = {
    displayCategoryList: function () {
        $('nav button .position-absolute').fadeIn(300);
    },
    hideCategoryList: function () {
        $('nav button .position-absolute').fadeOut(300);
    },
    scrollToSearch: function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300, () => {
            setTimeout(() => {
                $('header form input').focus();
            }, 100);
        });
    }
}