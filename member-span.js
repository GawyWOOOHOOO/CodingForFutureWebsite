$(document).ready(function(){
    $(".member-box").click(function(){
        if($(window).innerWidth() < 992) {
            $(this).find(".member-info").css({
                top: 'calc(4px + 100%)',
                left: '0',
                width: '100%'
                })
        }
        else
        {
            if($(this).offset().left + 1 >= ($(window).width()/2)){
                $(this).find(".member-info").css({
                    top: '0',
                    right: '100%',
                    left: 'auto',
                    width: '200%'
                })
            }
            else {
                $(this).find(".member-info").css({
                    top: '0',
                    left: '100%',
                    right: 'auto',
                    width: '200%'
                })
            }
        }
        $(".member-box").not(this).find(".member-info").fadeOut();
        $(this).find(".member-info").fadeToggle();
    })

    $(window).on('resize', function() {
        $(".member-box").not(this).find(".member-info").hide();
    })
});


