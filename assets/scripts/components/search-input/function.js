const searchInput = {
    placeholderHandler: () => {
        if (root.widthScreen > 767) {
            $('header input').attr('placeholder', 'Type about product ...');
            return;
        }

        $('header input').attr('placeholder', 'Search...');
    }
}