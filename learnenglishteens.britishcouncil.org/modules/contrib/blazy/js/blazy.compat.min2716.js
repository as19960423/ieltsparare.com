!function(o,n){"use strict";var i,r="blazy",t="data-",l=t+"b-ratios "+t+"ratios",c=t+"b-ratio "+t+"ratio",d="picture",e=".media--ratio",u={};function a(t){t=o.aniElement&&o.aniElement(t);o.animate&&o.isElm(t)&&!o.hasClass(t,"is-b-animated")&&o.animate(t)}function s(t,i,a){var n;if(t=t.target||t,a=!!o.isBool(a)&&a,o.isElm(t)){if(n=o.parse(o.attr(t,l)),o.isEmpty(n))return e=t,s=o.attr(e,c),void(!o.hasAttr(e,"style")&&s&&(e.style.paddingBottom=s+"%"));var e,s=o.isElm(o.find(t,d))&&a,a=o.extend(u,{up:s}),s=o.closest(t,"."+r);t.dblazy=o.isElm(s)&&s.dblazy,(a=o.activeWidth(n,a))&&!o.isUnd(a)&&(t.style.paddingBottom=a+"%")}}function b(){var t=this;t.mount(!0),i=t.options,o.isNull(t.init)&&(t.init=t.run(i)),function(){var t=this,i=t.context,a=o.findAll(i,e);a.length&&(o.each(a,s.bind(t)),t.checkResize(a,s,i))}.call(t)}n.blazy=o.extend(n.blazy||{},{clearCompat:function(t){var i=o.isBg(t)&&(this.isBlazy()||o.ie);this.pad(t,a,i?50:0)},checkResize:function(i,a,t,n){var e=this,s=e.init;return o.on("bio:resizing.compat",function(t){t=t&&t.detail?t.detail:{};u=t.winData||e.windowData(),e.resizeTick=s&&s.resizeTick||0,o.isFun(a)&&o.each(i,function(t,i){t=t.target||t;return a.call(e,t,i,!0)})}),n&&o.isFun(n)&&e.rebind(t,n,e.roObserver),e.destroyed=!1,u},unresize:function(){o.observer&&o.observer.unload(this)}}),n.behaviors.blazyCompat={attach:function(t){var i=n.blazy;i.context=o.context(t),o.once(b.call(i))},detach:function(t,i,a){"unload"===a&&n.blazy.unresize()}}}(dBlazy,Drupal);
