/**
 * @file
 * cookiepro-plus.js
 */

(function (Drupal, drupalSettings) {
  'use strict';

  /**
   * CookiePro Plus helpers.
   *
   * @type {{
   *  attachBehaviors: Drupal.cookiepro_plus.attachBehaviors,
   *  domReady: Drupal.cookiepro_plus.domReady,
   *  }}
   */
  Drupal.cookiepro_plus = {

    // Callback for scripts loaded using OneTrust.InsertScript helper function.
    attachBehaviors: function () {

      // Based on web/core/misc/drupal.init.js.
      Drupal.cookiepro_plus.domReady(function () {
        Drupal.attachBehaviors(document, drupalSettings);
      });
    },

    // Based on web/core/misc/drupal.init.js.
    domReady: function (callback) {
      var listener = function listener() {
        callback();
        document.removeEventListener('DOMContentLoaded', listener);
      };

      if (document.readyState !== 'loading') {
        setTimeout(callback, 0);
      } else {
        document.addEventListener('DOMContentLoaded', listener);
      }
    },
  };

})(Drupal, window.drupalSettings);
