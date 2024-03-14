/**
 * @file
 * Attaches the behaviors for the Views-Jump-Menu module.
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.viewsJumpMenu = {
    attach: function (context, settings) {
      $('.js-viewsJumpMenu', context).on('change', function () {
        let dataUrl;
        let baseUrl;
        dataUrl = $(this).find(':selected').data('url').replace(/^\//, "");
        var absoluteLinkReg = new RegExp('^(?:[a-z]+:)?//', 'i');
        if (absoluteLinkReg.test(dataUrl)) {
          baseUrl = '';
        }
        else {
          baseUrl = settings.path.baseUrl + settings.path.pathPrefix;
        }
        window.location = baseUrl + dataUrl;
      });
    }
  };

})(jQuery, Drupal);
