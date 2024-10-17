$(function () {

    //슬라이드
    function slide() {
        $('.slide>ul').animate({ top: '-300px' }, 1000, function () {
            $('.slide>ul').append($('.slide>ul>li').first())
            $('.slide>ul').css({ top: '0' });
        })
    }
    setInterval(slide, 2000)


    //탭
    $('.con1>ul>li').click(function () {
        $('.con1>ul>li').removeClass('on');
        $(this).addClass('on');

        var i = $(this).index();

        $('.tabcon').hide();
        $('.tabcon').eq(i).show();
        return false;
    })


    //네비메뉴
    $('nav>ul>li').mouseenter(function () {
        $('.sub').stop().slideDown();
    })

    $('nav>ul>li').mouseleave(function () {
        $('.sub').stop().slideUp();
    })


    //키보드 포커싱
    $('nav>ul>li').focusin(function () {
        $('.sub').slideDown();
        $(this).addClass('on');
    })
    $('.sub>li:last-child').focusout(function () {
        $('nav>ul>li').removeClass('on');
    })
    $('nav li:last-child li:last-child').focusout(function () {
        $('.sub').slideUp();
    })


    //팝업
    $('.pp').click(function () {
        $('.popup').show();
        return false;
    })

    $('.pbtn').click(function () {
        $('.popup').hide();
    })

})