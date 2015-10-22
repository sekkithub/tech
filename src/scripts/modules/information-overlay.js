var $infoOverlay = $('.information-overlay');
var $infoButton = $('.information-button');

var toggleContent = function() {
    if ($infoOverlay.hasClass('show')) {
        $infoOverlay.removeClass('show');
        $infoButton.removeClass('on');
    } else {
        $infoOverlay.addClass('show');
        $infoButton.addClass('on');
    }
    return false;
}

var init = function() {
    $infoButton.on('click', toggleContent);
}

exports.init = init;
