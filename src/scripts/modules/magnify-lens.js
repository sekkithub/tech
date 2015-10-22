var init = function () {
    var original_width = 0;
    var original_height = 0;
    
    $(".magnify").mousemove(function(e){
        if(!original_width && !original_height) {
            var image_obj = new Image();
            image_obj.src = $(".magnify__small-image").attr("src");
            original_width = image_obj.width;
            original_height = image_obj.height;
        } else {
            var magnify_offset = $(this).offset();
            var mx = e.pageX - magnify_offset.left;
            var my = e.pageY - magnify_offset.top;

            if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0) {
                $(".magnify__large-image").fadeIn(200);
            } else {
                $(".magnify__large-image").fadeOut(200);
            }

            if($(".magnify__large-image").is(":visible")) {
                var rx = Math.round(mx/$(".magnify__small-image").width()*original_width - $(".magnify__large-image").width()/2)*-1;
                var ry = Math.round(my/$(".magnify__small-image").height()*original_height - $(".magnify__large-image").height()/2)*-1;
                var bgp = rx + "px " + ry + "px";
                
                var px = mx - $(".magnify__large-image").width()/2;
                var py = my - $(".magnify__large-image").height()/2;
    
                $(".magnify__large-image").css({left: px, top: py, backgroundPosition: bgp});
            }
        }
    });
}

exports.init = init;
