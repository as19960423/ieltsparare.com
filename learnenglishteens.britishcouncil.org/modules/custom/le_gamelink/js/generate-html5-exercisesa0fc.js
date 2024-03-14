(function ($, Drupal, drupalSettings) {
  'use strict';
  
  $('a.embed').each(function(n, el) {

    var xmldata = $(el).attr('href');
    var path = $(el)[0].pathname.split('_');
    var gametype = path[0].split('d/');
    gametype = gametype[1];
    var nid_base64 = path[1].replace('.xml', '');
    var title = $('body .region-header .page-header').text().trim();
    if ($.inArray(gametype, drupalSettings.gamelink.le15) != -1) {
      var lep15link = '//' + $(el)[0].hostname + '/lep15/' + nid_base64 + '/le';
      var lep20link = '//' + $(el)[0].hostname + '/lep20_embed/' + nid_base64 + '/le';
      var lep25link = '//' + $(el)[0].hostname + '/lep25_embed/' + nid_base64 + '/le';

      var leplink = lep15link;
      if ($.inArray(gametype, drupalSettings.gamelink.le20) != -1) {
        leplink = lep20link;
      }
      if ($.inArray(gametype, drupalSettings.gamelink.le25) != -1) {
        leplink = lep25link;
      } 
      $(el).empty().after('<iframe frameborder="0" height="720" width="100%" title="'+ title +'" seamless src="' + leplink + '"></iframe>');
    } else {
      $(el).empty().after('<div id="embedGame' + n + '"></div>');
      $('#embedGame' + n).media({
        width:     500,
        height:    700,
        bgColor:   '#e8f0d7',
        src:       drupalSettings.gamelink.cdn + '/' + gametype + '.swf',
        attrs:     {wmode: 'window'},
        params:    {wmode: 'window'},
        flashvars: {xmldata: xmldata, assetpath: xmldata}
      });
    }

    $(this).click(function(e){
      e.preventDefault();
    });

  });
})(jQuery, Drupal, drupalSettings);
