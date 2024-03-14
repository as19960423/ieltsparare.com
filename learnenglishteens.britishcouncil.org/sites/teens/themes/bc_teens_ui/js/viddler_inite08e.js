(function ($) {
  "use strict";

  Drupal.behaviors.viddlerInit = {
    attach: function () {
      var $obj = $('div.viddler-custom-embed').not('[data-custom-id]');

      if ($obj.length) {
        var timestamp = new Date().getTime();

        $obj.each(function(index, item) {
          var id = timestamp + '-' + index;
          var $this = $(this).attr('data-custom-id', id);

          $this.data('viddlerInstance', new ViddlerEmbed({
            videoId: $this.data('videoId').toString(),
            target: 'div.viddler-custom-embed[data-custom-id="' + id + '"]',
            width: $this.data('width'),
            defaultResolution: $this.data('defaultResolution')
          }));
        });
      }
    }
  };

})(jQuery);
