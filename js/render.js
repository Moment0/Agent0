var outlet = undefined;

$(document).ready(function () {
  outlet = document.getElementById('outlet');
  var visitor;

  if (visitor = window.sessionStorage.getItem('agent0Position')) visit(visitor);
  else visit('startPage');

  var map = $('#map > .item');
  map.each(function (index, item) {
    $(item).hover(function () {
      $(item).find('.icon').clearQueue().animate({
        marginRight: '10px',
        opacity: 1
      }, 200);
    }, function () {
      $(item).find('.icon').clearQueue().animate({
        marginRight: 0,
        opacity: 0
      }, 200);
    })
  });

  window.onhashchange = function (visitor) {
    visit(window.location.hash.substr(1));
  };


});

var visit = function (page) {
  if ($('body').scrollTop() > 0 || $('html').scrollTop() > 0) {
    $('body,html').animate({
      scrollTop: 0
    }, function () {
      window.setTimeout(function () {
        window.sessionStorage.setItem('agent0Position', page)
        var pageHtml = document.getElementById(page).innerHTML;
        $(outlet).html(pageHtml);
        window.location.hash = page;
        $('.item.selected').removeClass('selected');
        $('.' + page + 'Nav').each(function (index, item) {
          $(item).addClass('selected');
        });
        window.setTimeout(function () {                                      //wegen der Assyncronität von Javascriptx
          if (page == "productPage") {
            tabs();
            gallery_init();
			    }
          if (page == "startPage") carousel();
        }, 50);
      }, 100);
    });
  } else {
    window.sessionStorage.setItem('agent0Position', page)
    var pageHtml = document.getElementById(page).innerHTML;
    $(outlet).html(pageHtml);
    window.location.hash = page;
    $('.item.selected').removeClass('selected');
    $('.' + page + 'Nav').each(function (index, item) {
      $(item).addClass('selected');
    });
    window.setTimeout(function () {
      if (page == "productPage") {
        tabs();
        gallery_init();
			}
      if (page == "startPage") carousel();
    }, 50);
  }
}
