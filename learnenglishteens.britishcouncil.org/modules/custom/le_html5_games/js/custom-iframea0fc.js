(function ($, Drupal, drupalSettings) {
  'use strict';

  var isScreenfullEnabled = screenfull && screenfull.isEnabled;

  $("#demo-img").css("cursor", "pointer").click(() => {
    var src = $("#demo-img").data("html5-game");

    const iframe = document.createElement("iframe");
    iframe.setAttribute("id", "external-iframe");
    iframe.setAttribute("src", src);
    iframe.setAttribute("frameborder", "no");
    
    iframe.style.zIndex = "1001";
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.background = "#903779";

    jQuery("#demo-img").hide();
    jQuery(document.body).prepend(iframe);
    document.body.style.overflow = "hidden";

    var $closeButton = $('<button type="button" class="close-iframe-trigger">Close</button>').click(closeIframe);

    $closeButton.css({
      position: 'fixed',
      top: 0,
      right: 0,
      zIndex: 1002
    });

    $('body').append($closeButton);

    if (isScreenfullEnabled) {
      screenfull.request();
    }

    return false;
  });

  function fullscreenchange() {
    if (!screenfull.isFullscreen) {
      closeIframe();
    }
  }

  function closeIframe() {
    if (isScreenfullEnabled) {
      screenfull.exit();
    }

    $("#external-iframe, button.close-iframe-trigger").remove();
    $("body").css("overflow", "auto").scrollTop(0);
    $("#demo-img").show();
  }

  if (isScreenfullEnabled) {
    screenfull.on("change", fullscreenchange);
    // Set the initial values
    fullscreenchange();
  }

})(jQuery, Drupal, drupalSettings);
