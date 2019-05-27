$(window).scroll(function(){
    var scroll_position = $(window).scrollTop();
    $('#avantage').css({
        'background-position-x' : - scroll_position + 'px',
    })
})