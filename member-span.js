$(document).ready(function(){
    $(".member-box").click(function(){
        // $(".inner-our-team").not(this).next(".member-hover").fadeOut();
        // $(this).next(".member-info").fadeToggle();
        $(".member-box").not(this).find(".member-info").fadeOut();
        $(this).find(".member-info").fadeToggle();
    })
});


