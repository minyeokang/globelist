$(document).ready(function () {
    //위로 가기 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#gotop").fadeIn();
        } else {
            $("#gotop").fadeOut();
        }
    });

    $("#gotop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });


    //로그인
    $('.login').hide();
    $('.util li:first-child').click(function () {
        $('.login').show();
    });
    $('.login_inner .close_login').click(function () {
        $('.login').hide();
    });

    $('.logins').click(function () {
        $('.login').show();
    });



    //회원가입
    $('.join').hide();
    $('.join_btn').click(function () {
        $('.login').hide();
        $('.join').show();
    });
    $('.join_inner .close_login').click(function () {
        $('.join').hide();
    });

    $('.joins').click(function () {
        $('.join').show();
    });

    //스크롤 트리거 
    $(window).scroll(function () {
        $('.ani_stop').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani_stop');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).addClass('ani_stop');
            }
        });
    });

    //서치 팝업
    $('.modal').hide();
    $('.sch').click(function () {
        $('.modal').stop().fadeIn();
    });
    $('.modal button').click(function () {
        $('.modal').stop().fadeOut();
    });


    //메뉴
    $('.nav_bg,.submenu').hide();
    $('.gnb > li').mouseenter(function () {
        $('.nav_bg,.submenu').stop().slideDown();
    });
    $('.gnb > li').mouseleave(function () {
        $('.nav_bg,.submenu').stop().slideUp();
    });

    //배너
    $('.banner').slick({
        autoplay: true,
        speed: 500,
        fade: true,
        dots: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    //추천여행지
    $('.europe').slick({
        autoplay: true,
        fade: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
    $('.america').slick({
        autoplay: true,
        fade: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
    $('.pacific').slick({
        autoplay: true,
        fade: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    //특가 항공권
    $('.detail').hide();
    $('.tickets2 li').mouseenter(function () {
        $(this).children('.detail').stop().fadeIn();
    });
    $('.tickets2 li').mouseleave(function () {
        $(this).children('.detail').stop().fadeOut();
    });

    //게시판 페이지박스
    $('.page li:nth-child(2) a').addClass('page_on');
    $('.page li').click(function () {
        $(this).find('a').addClass('page_on');
        $(this).siblings().find('a').removeClass('page_on');

    });

});