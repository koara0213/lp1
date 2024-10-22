// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');

$('.hamburger-button').on('click', function () {
  hamburger.toggleClass('hamburger-menu-active');
});

$('.hamburger-menu-list').on('click', function () {
  hamburger.removeClass('hamburger-menu-active');
});

$(window).on('resize', function () {
  hamburger.removeClass('hamburger-menu-active');
});

// リンクを滑らかにスクロール
$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  });
});

// コース別・目的別
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');

        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        document.getElementById(target).classList.add('active');
    });
});

// FAQ
$(document).ready(function () {
  if ($(window).width() >= 768) {
    $('.faq-search-container_faq-bg-wrapper, .faq-search-container_search-bg-wrapper').each(function () {
      const originalImage = $(this).css('background-image');
      $(this).data('original', originalImage);
    });

    $('.faq-search-container_faq-bg-wrapper, .faq-search-container_search-bg-wrapper').hover(
      function () {
        const hoverImage = $(this).data('hover');
        $(this).css('background-image', `url(${hoverImage})`);
        $(this).css('background-size', '120%');
      },
      function () {
        const originalImage = $(this).data('original');
        $(this).css('background-image', originalImage);
        $(this).css('background-size', '100%');
      }
    );
  }
});