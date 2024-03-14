(function ($) {
  "use strict";

  Drupal.behaviors.mainMenu = {
    attach: function () {
      if (once('mainMenu', 'html').length) {
        $(window).each(function() {
          // remove Bootstrap toggle feature from the menus
          $('#block-system-menu-block-main, #block-system-menu-block-footer').find('ul.menu--main').find('a.dropdown-toggle').each(function () {
            this.removeAttribute('data-toggle');
          });

          // handle mouseover
          $('#block-system-menu-block-main').find('ul.menu--main').find('li.dropdown').hover(function() {
            $(this).children('ul').stop(true, true).delay(100).slideDown();

          }, function() {
            $(this).children('ul').stop(true, true).delay(50).slideUp();
          })
          // handle touch device
          .on('touchend', function(e) {
            var $this = $(this);
            var $eventTarget = $(e.target);
            var $dropdown = $this.children('ul');

            var preventDefault = false;

            if ($eventTarget.hasClass('dropdown-toggle')) { // a.dropdown-toggle
              // allow <a> behavior if current menu is already expanded
              preventDefault = !$dropdown.hasClass('expanded');
            }
            else if ($eventTarget.hasClass('dropdown')) {
              preventDefault = true;
            }

            if (preventDefault) {
              e.preventDefault();

              // close expanded menus if any
              $this.siblings().children('ul.expanded').stop(true, true).delay(50).slideUp().removeClass('expanded');

              // expand current menu
              $this.children('ul').delay(50).slideToggle().toggleClass('expanded');
            }
          });
        });
      }
    }
  };

})(jQuery);

