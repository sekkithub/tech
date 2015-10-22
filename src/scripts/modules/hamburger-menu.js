var $hamburgerMenu = $('.hamburger-menu');
var $body = $('body');
var $html = $('html');
var $container = $('.container');
var $filter = $('.filter');

var toggleContent = function() {
    if ($hamburgerMenu.hasClass('open')) {
        $hamburgerMenu.removeClass('open');
        $filter.removeClass('on');
        $html.removeClass('no-scroll');
        $body.removeClass('pushed');
        $body.velocity({
            translateX: "0px"
        }, "easeInOutQuint");
    } else {
        $hamburgerMenu.addClass('open');
        $filter.addClass('on');
        $html.addClass('no-scroll');
        $body.addClass('pushed');
        $body.velocity({
            translateX: "-300px"
        }, "easeInOutQuint");
    }
    return false;
}

var closeMenu = function(e) {
    e.preventDefault();
    if ($hamburgerMenu.hasClass('open')) {
        $hamburgerMenu.removeClass('open');
        $filter.removeClass('on');
        $container.removeClass('dark-out');
        $html.removeClass('no-scroll');
        $body.removeClass('pushed');
        $body.velocity({
            translateX: "0px"
        }, "easeInOutQuint");
    }
    return false;
}

var init = function() {
    $hamburgerMenu.on('click', toggleContent);
    $filter.on('click', closeMenu);
}

exports.init = init;
