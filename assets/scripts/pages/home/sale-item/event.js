$(document).ready(function () {
    if (pages.isHome()) {
        
        pages.home.saleItem.init();

        $('.home-sale-item .col-auto').eq(1).click(function (e) {
            e.preventDefault();
            pages.home.saleItem.nextItemHandler();
        });

    }
});