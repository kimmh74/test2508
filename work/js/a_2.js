// HTML CSS JSResult Skip Results IframeEDIT ON
$('.gnb > li').on('mouseover', function(){
    $('.sub-wrap').stop().slideUp(200)
    $(this).children('.sub-wrap').stop().slideDown(200)
});

$('.gnb > li').on('mouseleave', function(){
    $(this).children('.sub-wrap').stop().slideUp(200)
});
