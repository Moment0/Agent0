var gallery_init = function() {
  // Only apply these styles when JavaScript is enabled
  $('div.navigation').css({'width' : '185px', 'float' : 'left'});
  $('div.gallery_content').css('display', 'block');

  // Initially set opacity on thumbs and add additional styling for hover
  // effect on thumbs
  var onMouseOutOpacity = 0.67;
  $('#thumbs ul.thumbs li').opacityrollover({
    mouseOutOpacity:   onMouseOutOpacity,
    mouseOverOpacity:  1.0,
    fadeSpeed:         'fast',
    exemptionSelector: '.selected'
  });

  // Initialize Advanced Galleriffic Gallery
  var gallery = $('#thumbs').galleriffic({
    imageContainerSel: '#slideshow',
    onSlideChange:     function(prevIndex, nextIndex) {
      // 'this' refers to the gallery, which is an extension of $('#thumbs')
      this.find('ul.thumbs').children()
        .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
        .eq(nextIndex).fadeTo('fast', 1.0);
    },
    onPageTransitionOut:       function(callback) {
      this.fadeTo('fast', 0.0, callback);
    },
    onPageTransitionIn:        function() {
      this.fadeTo('fast', 1.0);
    }
  });
};
