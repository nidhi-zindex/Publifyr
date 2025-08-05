
$(document).ready(function () {
  // Cache selectors
  var $toggler = $('.navbar-toggler');
  var $nav = $('.nav');
  var $navItems = $('.nav-item a');
  var $body = $('body');

  $toggler.on('click', function() {
    $(this).toggleClass('active');
    $nav.toggleClass('active');
    $body.toggleClass('no-scroll');
  });

  $navItems.on('click', function() {
    if ($(window).width() <= 991) {
      $toggler.removeClass('active');
      $nav.removeClass('active');
      $body.removeClass('no-scroll');
    }
  });

  $(window).on('resize', function() {
    if ($(this).width() > 991) {
      $toggler.removeClass('active');
      $nav.removeClass('active');
      $body.removeClass('no-scroll');
    }
  });

});