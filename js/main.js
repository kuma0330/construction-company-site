/* --------------------------------
 * ハンバーガーメニュー
 * -------------------------------- */
$(".btn-gnavi").on('click',function(){

    var rightVal = 0;

    if($(this).hasClass("open")) {

        rightVal = -320;
        $(this).removeClass("open");

    } else {

        $(this).addClass("open");
    }
    
    $("#g-navi").stop().animate({
        right: rightVal
    }, 200);
});

 /* --------------------------------
 * worksのslider
 * -------------------------------- */
$(function() {
    $('.works-box__thumb').slick({
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 5000,
      vartical: false,
      centerMode: false,
      fade: true,
      arrows: false
   });
});

 /* --------------------------------
 * スムーズスクロール
 * -------------------------------- */
$('a[href^="#"]').on('click',function(){

    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href); 
    var position = target.offset().top;

    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
});

/* --------------------------------
* back-to-bottonの表示・非表示
* -------------------------------- */
const updateButton = () => {
    if ($(window).scrollTop() >= 300) {

      $('.back-to-top').fadeIn();
    } else {

      $('.back-to-top').fadeOut();
    }
  };
  
  $(window).on('scroll', updateButton);
  
  $('.back-to-top').on('click', (e) => {
    e.preventDefault();
  
  });
  
  updateButton();