$(function() {
    $('.address-js').on('click', function(e){
        var address = $(e.target).siblings('.list-city-dw');
        address.css({'display':'block', 'opacity':'0'}).animate({'opacity':'1'}, 500);

        address.on('mouseleave', function(){
            address.animate({'opacity':'0'}, 200);
        })
    });

    $(document).scroll(function(){
        var menuWrap = $('.wrap-menu-js'),
            menu = $('.wrap-menu-js .scroll-menu'),
            posMenu = menuWrap.offset().top,
            curPosDocument = $(document).scrollTop();

        if(curPosDocument > posMenu) {
            menu.css('top', curPosDocument - posMenu)
        }
    });

});