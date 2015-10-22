var init = function() {
    var duration = 150;
    $('.arrow--prev').mouseenter(function(){
        var pageLinkText = $(this).next('.page-link__title');
        pageLinkText.stop().velocity({
            opacity: 1,
            translateX: "0"
        }, { duration: duration });
    });
    $('.arrow--prev').mouseleave(function(){
        var pageLinkText = $(this).next('.page-link__title');
        pageLinkText.stop().velocity({
            opacity: 0,
            translateX: "-200px"
        }, { duration: duration });
    });

    $('.arrow--next').mouseenter(function(){
        var pageLinkText = $(this).prev('.page-link__title');
        pageLinkText.stop().velocity({
            opacity: 1,
            translateX: "0"
        }, { duration: duration });
    });
    $('.arrow--next').mouseleave(function(){
        var pageLinkText = $(this).prev('.page-link__title');
        pageLinkText.stop().velocity({
            opacity: 0,
            translateX: "200px"
        }, { duration: duration });
    });
}

exports.init = init;
