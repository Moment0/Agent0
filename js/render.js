var outlet = undefined;

$(document).ready(function () {
  outlet = document.getElementById('outlet');
  var visitor;
  if (visitor = window.sessionStorage.getItem('agent0Position')) visit(visitor);
  else visit('startPage');

  window.onhashchange = function (visitor) {
    visit(window.location.hash.substr(1));
  };
});

var visit = function (page) {
  if ($('body').scrollTop() > 0) {
    $('body').animate({
      scrollTop: 0
    }, function () {
      window.setTimeout(function () {
        window.sessionStorage.setItem('agent0Position', page)
        var pageHtml = document.getElementById(page).innerHTML;
        outlet.innerHTML = pageHtml;
        window.location.hash = page;
      }, 100);
    });
  } else {
    window.sessionStorage.setItem('agent0Position', page)
    var pageHtml = document.getElementById(page).innerHTML;
    outlet.innerHTML = pageHtml;
    window.location.hash = page;
  }
}
