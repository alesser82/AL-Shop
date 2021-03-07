function screenSizeHandler () {
    root.widthScreen = screen.width;
    root.heightScreen = screen.height;
}

function bottomSpaceMobile () {
    let paddingBottom = ($('nav').height()) + 20;
    $('body').attr('style', `padding-bottom: ${paddingBottom}px`);
}