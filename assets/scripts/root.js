const $ = require( "jquery" );

let widthScreen = 0;
let heightScreen = 0;

const functions = {
    getScreenSize: () => {
        widthScreen = $(window).width;
        heightScreen = $(window).height;
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

exports.widthScreen = widthScreen;
exports.heightScreen = heightScreen;
exports.functions = functions;
exports.events = events;