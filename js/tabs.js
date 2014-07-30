// add animation to tabs and make selection visible
var tabs = function () {
  var headerTab = $('.headerTab');
  headerTab.each(function (index, item) {
    $(item).click(function () {
      $("#tabs").animate({ marginLeft: -829 * index });
      $(".headerTab.selected").removeClass('selected');
      $(item).addClass('selected');
    });
  });
};
