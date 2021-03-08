function screenSizeHandler () {
    root.widthScreen = screen.width;
    root.heightScreen = screen.height;
}

function bottomSpaceMobile () {
    if (root.widthScreen < 992) {
        let paddingBottom = $('nav').height();
        $('body').attr('style', `padding-bottom: ${paddingBottom}px`);
    } else {
        $('body').attr('style', '');
    }

    console.log('test');
}

function test() {
    $(window).resize(function () {

        screenSizeHandler();

        bottomSpaceMobile();
        
    });
}