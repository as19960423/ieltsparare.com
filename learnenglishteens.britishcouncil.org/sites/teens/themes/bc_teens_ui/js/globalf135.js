(function ($) {
  "use strict";
  Drupal.behaviors.global = {
    attach: function () {
      if (once('global', 'html').length) {
        $(window).each(function() {
          $('a').hover(function(e){
            $(this).attr('title', '');
          });
        });
      }
    }
  };

})(jQuery);

