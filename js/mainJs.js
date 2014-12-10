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


    /*popup function*/
    function popupWindow(targetClick, showCurrentForm) {
        targetClick.on('click', function (e) {
            e.preventDefault();

            var bgPopup = $('#bg-popup'),
                fotoPopup = $('#box-popup');

            bgPopup.addClass('show_js');
            fotoPopup.animate({'opacity': 1}, 500);
            showCurrentForm.addClass('show_js');

            bgPopup.height($(document).height());

            var fotoInPopupW = showCurrentForm.width(),
                scrollTop = window.pageYOffset;

            fotoPopup.css({
                'position': 'absolute',
                'top': scrollTop + 100,
                'left': '50%',
                'margin-left': - (fotoInPopupW / 2)
            });

            $('.icon-close_js, #bg-popup').on('click', function() {
                bgPopup.removeClass('show_js');
                showCurrentForm.removeClass('show_js');

                $(showCurrentForm).find('.show_js').removeClass('show_js');

                fotoPopup.css({
                    'opacity' : 0,
                    'left': 0,
                    'margin-left': 0
                });
            });

            $("#box-popup").click(function(e) {
                e.stopPropagation();
            });
        });
    }
    /*end*/

    /*call popup*/
    var callBackForm = $('.btn-callback-js'),
        formCallBack = $('.box-callback');
    popupWindow(callBackForm, formCallBack);

    var callFormOrder = $('.btn-order-js'),
        formOrder = $('.ordering');
    popupWindow(callFormOrder, formOrder);
    /*end*/
});