$(document).ready(function() {
  $('#navbar').clone().attr('id', 'fixed-navbar').addClass('invisible').appendTo('.header');

  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 80) {
      $('#fixed-navbar').removeClass('invisible');
     }
     else {
       $('#fixed-navbar').addClass('invisible');
     }
  });
});
