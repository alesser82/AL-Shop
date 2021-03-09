const searchInput = {
    'function': {
        'placeholderHandler': function () {
            if (root.widthScreen > 767) {
                $('header input').attr('placeholder', 'Type about product ...');
                return;
            }

            $('header input').attr('placeholder', 'Search...');
        },
        'init': async function () {
            this.placeholderHandler();
        }
    },
    'event': function () {
        $(window).resize(function () {
            searchInput.function.init();
        });
    }
};

export default searchInput;