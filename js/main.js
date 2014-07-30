
// opens a new window wich shows the location of the company
var openMap = function () {
  window.open("https://www.google.de/maps/place/Miami,+Florida/@25.76832,-80.1330274,16z/data=!4m2!3m1!1s0x88d9b0a20ec8c111:0xff96f271ddad4f65", '_blank',
  'toolbar=no,location=no,menubar=no,status=no,resizable=no,innerWidth=752,innerHeight=492,top=200,left=200');
}


// show language switcher when hovering over header
$(document).ready(function () {
  $('.logo-container').hover(function () {
    $('.language-switch').clearQueue().animate({
      opacity: 1
    });
  }, function () {
    $('.language-switch').clearQueue().animate({
      opacity: 0
    });
  });
});
