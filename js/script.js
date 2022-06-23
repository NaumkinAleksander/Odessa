$('.hamburger-btn').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('hamburger-btn_active');
  $('.hamburger-nav').toggleClass('hamburger-nav_active');
});

$('.menu-btn').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
});
