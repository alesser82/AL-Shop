let root = {
    widthScreen: 0,
    heightScreen: 0,
    functions: {
        getScreenSize: () => {
            root.widthScreen = $(window).width();
            root.heightScreen = $(window).height();
        },
        bottomSpaceHandler: () => {
            if (root.widthScreen < 992) {
                let paddingBottom = $('nav').height();
                $('body').css('padding-bottom', `${paddingBottom}px`)
            } else {
                $('body').css('padding-bottom', `0px`)
            }
        },
        init: () => {
            root.functions.getScreenSize();
            root.functions.bottomSpaceHandler();
        }
    },
    events: () => {
        $(window).resize(function () {
            root.functions.init();
        });
    }
}