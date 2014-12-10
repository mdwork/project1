$(function() {
    $('.address-js').on('click', function(e){
        var address = $(e.target).siblings('.list-city-dw');
        address.css({'display':'block', 'opacity':'0'}).animate({'opacity':'1'}, 500);

        address.on('mouseleave', function(){
            address.animate({'opacity':'0'}, 200);
        })
    });

    $(document).scroll(function(){
        var menuWrap = $('.wrap-menu-js'), //блок перемещения меню
            menuWrapHeight = menuWrap.height(), //высота блока перемещения меню
            menu = $('.wrap-menu-js .scroll-menu'), ////фиксированное меню
            menuHeight = menu.height(), //высота фиксированного меню
            posMenu = menuWrap.offset().top, //позиция блока враппера в документе
            curPosDocument = $(document).scrollTop(),//текущая позиция экрана
            heightWindow = window.innerHeight;

        if(curPosDocument < posMenu + 40) {
            menu.css({'top': 40 + 'px', 'bottom':'auto'});
        }
        else if(curPosDocument > posMenu) {
            if (curPosDocument >  menuWrapHeight + posMenu - menuHeight - 45) {
                menu.css({'top':'auto', 'bottom': 45 + 'px'});
            }

            else {
                menu.css({'top': curPosDocument - posMenu, 'bottom':'auto'});
            }
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

    $('.list-food li:nth-child(3n)').css('margin-right','0');
});