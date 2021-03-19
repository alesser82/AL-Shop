$(document).ready( () => {

    root.functions.init();
    root.events();

    searchInput.functions.init();
    searchInput.events();

    navbar.functions.init();
    navbar.events();

    toTopButton.functions.create();
    toTopButton.events();

});