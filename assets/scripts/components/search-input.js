const $ = require( "jquery" );
const root = require('../root');

const functions = {
    placeholderHandler: () => {
        if (root.widthScreen > 767) {
            $('header input').attr('placeholder', 'Type about product ...');
            return;
        }

        $('header input').attr('placeholder', 'Search...');
    },
    init: async () => {
        functions.placeholderHandler();
    }
};

const events = () => {
    $(window).resize(function () {
        functions.init();
    });
}

exports.functions = functions;
exports.events = events;