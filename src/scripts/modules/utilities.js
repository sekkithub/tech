var hello = function() {
    console.log('Hello from utilities.');
}

var goodbye = function() {
    console.log('Goodbye from utilities.');
}

var isMobile = function() {
    if ((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        return true;
    } else {
        return false;
    }
}

exports.hello = hello;
exports.goodbye = goodbye;
exports.isMobile = isMobile;