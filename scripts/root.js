const $ = require( "jquery" );

const root = {
    'widthScreen': 0,
    'heightScreen': 0,
    'function': {
        'getScreenSize': function () {
            root.widthScreen = screen.width;
            root.heightScreen = screen.height;
        },
        'bottomSpaceHandler': function () {
            if (root.widthScreen < 992) {
                let paddingBottom = $('nav').height();
                $('body').css('padding-bottom', `${paddingBottom}px`)
            } else {
                $('body').css('padding-bottom', `0px`)
            }
        },
        'init': function () {
            this.getScreenSize();
            this.bottomSpaceHandler();
        }
    },
    'event': function () {

        $(window).resize(function () {

            root.function.init();

        });

    }
};

exports.root = root;