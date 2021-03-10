const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

let widthScreen = 0;
let heightScreen = 0;

const functions = {
    getScreenSize: () => {
        widthScreen = screen.width;
        heightScreen = screen.height;
    },
    bottomSpaceHandler: () => {
        if (widthScreen < 992) {
            let paddingBottom = $('nav').height();
            $('body').css('padding-bottom', `${paddingBottom}px`)
        } else {
            $('body').css('padding-bottom', `0px`)
        }
    },
    init: () => {
        functions.getScreenSize();
        functions.bottomSpaceHandler();
    }
};

const events = () => {
    $(window).resize(function () {
        functions.init();
    });
}

exports.root = {
    widthScreen,
    heightScreen,
    functions,
    events
};