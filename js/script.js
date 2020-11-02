$(document).ready(function(){
    /* mobile-nav*/   
    $('.toggle-btn').click(function(){
        var nav = $('.nav-links');
        var icon = $('.toggle-btn i');
        if(nav.hasClass('open-btn'))
            nav.removeClass('open-btn');
        else
            nav.addClass('open-btn');

        if(icon.hasClass('fa-bars')){
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        }else{
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    });
});
