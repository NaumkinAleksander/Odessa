$('.hamburger-btn').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('hamburger-btn_active');
  $('.hamburger-nav').toggleClass('hamburger-nav_active');
});
