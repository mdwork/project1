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
            menuWrapHeight = menuWrap.height(),
            menu = $('.wrap-menu-js .scroll-menu'),
            menuHeight = menu.height(),
            posMenu = menuWrap.offset().top,
            curPosDocument = $(document).scrollTop();

        if(curPosDocument < posMenu) {
            menu.css('top', 40 + 'px');
        }
        else if(curPosDocument > posMenu && curPosDocument < menuWrapHeight + posMenu - $(window).height()) {
            if(curPosDocument - posMenu > 40) {
                menu.css('top', curPosDocument - posMenu);
            }
            else {
                menu.css('top', 40 + 'px');
            }
        }
        else if(curPosDocument > menuWrapHeight + posMenu - $(window).height()) {
            menu.css('top', menuWrapHeight + posMenu - menuHeight - $(window).height() - 35);
        }
    });

});