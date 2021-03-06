pages.home.saleItem = {
    items: {},
    activeItems: {},
    nonActiveItems: [],
    getItem: function (active = null) {

        if (active === true) {
            return $('.home-sale-item .col-lg-3.active');
        }

        if (active === false) {

            let nonActiveItems = [];

            $.each($('.home-sale-item .col-lg-3'), function (key, value) {

                if ( !$('.home-sale-item .col-lg-3').eq(key).hasClass('active') ) {
                    nonActiveItems.push($('.home-sale-item .col-lg-3').eq(key));
                }

            });

            this.nonActiveItems = nonActiveItems;

        }


        return $('.home-sale-item .col-lg-3');

    },
    init: async function () {

        this.items = this.getItem();

        if (this.items.length < 5) {
            this.scrollButtonStatus(false);
            this.scrollButtonStatus(false, 2);
            return true;
        }

        await this.activateItem([
            this.items.eq(0),
            this.items.eq(1),
            this.items.eq(2),
            this.items.eq(3),
        ]);

        this.activeItems = this.getItem(true);
        this.nonActiveItems = this.getItem(false);

        this.hideNonActiveItem();
        this.showActiveItem();

        return true;

    },
    scrollButtonStatus: async function (active = true, child = 1) {
        if (active) {
            $('.home-sale-item .col-auto').eq(child - 1).addClass('d-block');
            return true;
        }

        $('.home-sale-item .col-auto').eq(child - 1).removeClass('d-block');
        return true;
    },
    nextItemHandler: async function () {

        let nonActiveItem = this.activeItems.eq(0);
        let lastActiveItem = this.activeItems.eq(3);
        let nextActiveItem = await this.getNextItem();

        if (!nextActiveItem) {
            return false;
        }

        nextActiveItem.attr('style', 'display: block;');

        nonActiveItem.animate({
            opacity: 0,
            marginLeft: `-${nonActiveItem.width()}`,
        }, 300);

        nextActiveItem.animate({
            opacity: 1,
        }, 300);

        setTimeout(() => {
            nonActiveItem.removeClass('active');
            nextActiveItem.addClass('active');
            this.activeItems = this.getItem(true);
            this.nonActiveItems = this.getItem(false);
            this.hideNonActiveItem();
            this.showActiveItem();
        }, 300);

    },
    getNextItem: async function () {
        let nextItems = [];
        let allItem = this.getItem();

        $.each(allItem, function (key,value) {
            if ( allItem.eq(key).hasClass('active') === false ) {

                let availableNext = allItem.eq(key + 1);

                // console.log(availableNext);

                if (availableNext) {

                    if (availableNext.hasClass('active') === false) {

                        nextItems.push(allItem.eq(key));

                    }

                }
            }
        });

        console.log(nextItems);

        if (nextItems.length < 1) {
            return false;
        }

        return nextItems[0];
    },
    activateItem: async function (items) {
        $.each(items, function (key, value) {
            items[key].addClass('active');
        });
    },
    deactiveItem: async function (items) {
        $.each(items, function (key, value) {
            items[key].removeClass('active');
        });
    },
    hideNonActiveItem: async function () {

        let nonActiveItems = this.nonActiveItems;

        $.each(nonActiveItems, function (key, value) {
            nonActiveItems.eq(key).attr('style', 'display: none; opacity: 0');
        });

    },
    showActiveItem: async function () {

        let activeItems = this.activeItems;

        $.each(activeItems, function (key, value) {
            activeItems.eq(key).attr('style', 'display: block; opacity: 1');
        });

    }
}