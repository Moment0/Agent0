var outlet = undefined;

$(document).ready(function () {
  outlet = document.getElementById('outlet');
  var visitor;

  // when location is stored in session storage then visit this location otherwise visit startPage
  if (visitor = window.sessionStorage.getItem('agent0Position')) visit(visitor);
  else visit('startPage');

  // animate arrows in footer
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

  // when hash in url changes then visit the given location
  window.onhashchange = function (visitor) {
    visit(window.location.hash.substr(1));
  };
});


// this function changes the location
var visit = function (page) {
  // when window isn't scrolled to the top then first scroll up before changing location
  if ($('body').scrollTop() > 0 || $('html').scrollTop() > 0) {
    $('body,html').animate({
      scrollTop: 0
    }, function () {
      window.setTimeout(function () {
        // set session storage to the visited page
        window.sessionStorage.setItem('agent0Position', page)
        //get information out of script tag to render into outlet
        var pageHtml = document.getElementById(page).innerHTML;
        // render into outlet
        $(outlet).html(pageHtml);
        window.location.hash = page;
        // make selection in navbar visible
        $('.item.selected').removeClass('selected');
        $('.' + page + 'Nav').each(function (index, item) {
          $(item).addClass('selected');
        });
        window.setTimeout(function () {               //because of the assyncronity of javascript
          // initalize tabs gallery and carousel
          if (page == "productPage") {
            tabs();
            gallery_init();
			    }
          if (page == "startPage") carousel();
        }, 50);
      }, 100);
    });
  } else {
    // set session storage to the visited page
    window.sessionStorage.setItem('agent0Position', page)
    //get information out of script tag to render into outlet
    var pageHtml = document.getElementById(page).innerHTML;
    // render into outlet
    $(outlet).html(pageHtml);
    window.location.hash = page;
    // make selection in navbar visible
    $('.item.selected').removeClass('selected');
    $('.' + page + 'Nav').each(function (index, item) {
      $(item).addClass('selected');
    });
    window.setTimeout(function () {                 //because of the assyncronity of javascript
      // initalize tabs gallery and carousel
      if (page == "productPage") {
        tabs();
        gallery_init();
			}
      if (page == "startPage") carousel();
    }, 50);
  }
}
