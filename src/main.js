require("babel-core/register");
require("babel-polyfill");

import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const $ = require( "jquery" );
// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );
import 'bootstrap';

const root = require('../assets/scripts/root');
const searchInput = require('../assets/scripts/components/search-input');
const navbar = require('../assets/scripts/components/navbar');

$(document).ready(() => {

    root.functions.init();
    root.events();

    navbar.functions.init();
    navbar.events();

    searchInput.functions.init();
    searchInput.events();

});