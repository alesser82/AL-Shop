let searchInput = {
    functions: {
        placeholderHandler: () => {
            if (root.widthScreen > 767) {
                $('header input').attr(
                    'placeholder', 'Type about product ...'
                );
                return;
            }

            $('header input').attr('placeholder', 'Search...');
        },
        init: () => {
            searchInput.functions.placeholderHandler();
        }
    },
    events: () => {
        $(window).resize(function () {
            searchInput.functions.init();
        });
    }
}