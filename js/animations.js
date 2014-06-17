$(document).ready(function () {
  var map = $('#map > .item');
  map.each(function (index, item) {
    $(item).hover(function () {
      $(item).find('.icon').clearQueue().animate({
        marginRight: 0
      }, 200);
    }, function () {
      $(item).find('.icon').clearQueue().animate({
        marginRight: '10px'
      }, 200);
    })
  });
});
