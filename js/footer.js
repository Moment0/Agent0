$(document).ready(function() {
  $('#footer').clone().attr('id', 'fixed-footer').appendTo('.site');

  $(window).bind('scroll', function() {
    if ($('body').height() - 144 > $(window).innerHeight() + $(window).scrollTop()) {
      $('#fixed-footer').removeClass('invisible');
    }
    else {
      $('#fixed-footer').addClass('invisible');
    }
  });

  $('#fixed-footer').hover(function () {
    $('#fixed-footer').clearQueue().animate({
      bottom: 0
    }, 200);
    $('#fixed-footer > .item').clearQueue().animate({
      opacity: 1
    }, 200);
  }, function () {
    $('#fixed-footer > .item').clearQueue().animate({
      opacity: 0
    }, 200);
    $('#fixed-footer').clearQueue().animate({
      bottom: -144
    }, 200);
  })
});
