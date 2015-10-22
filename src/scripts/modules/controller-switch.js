var $controllerSwitch = $('.controller-switch');

var $pageHead = $('.page-head');
var $pageLinkRight = $('.page-link--right');
var $pageLinkLeft = $('.page-link--left');
var $infoButton = $('.information-button');

var toggleContent = function() {
    if ($controllerSwitch.hasClass('switch-off')) {
        $controllerSwitch.removeClass('switch-off');
        $('.controller-switch__state').text('Hide');
        $pageHead.removeClass('hide');
        $pageLinkRight.removeClass('hide');
        $pageLinkLeft.removeClass('hide');
        $infoButton.removeClass('hide');
    } else {
        $controllerSwitch.addClass('switch-off');
        $('.controller-switch__state').text('Show');
        $pageHead.addClass('hide');
        $pageLinkRight.addClass('hide');
        $pageLinkLeft.addClass('hide');
        $infoButton.addClass('hide');
    }
    return false;
}

var init = function() {
    $controllerSwitch.on('click', toggleContent);
}

exports.init = init;
