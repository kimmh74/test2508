// HTML CSS JSResult Skip Results IframeEDIT ON
$('.nav > li').on('mouseover', function(){
    $('.submenu').stop().slideUp(200)
    $(this).children('.submenu').stop().slideDown(200)
});

$('.nav > li').on('mouseleave', function(){
    $(this).children('.submenu').stop().slideUp(200)
});