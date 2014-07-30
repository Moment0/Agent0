// adds a fixed navbar by cloning the originally navbar
$(document).ready(function() {
  $('#navbar').clone().attr('id', 'fixed-navbar').addClass('invisible').appendTo('.header');

  // show fixed navbar when not at the top and hide when at the top
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 100) {
      $('#fixed-navbar').removeClass('invisible');
     }
     else {
       $('#fixed-navbar').addClass('invisible');
     }
  });
});
