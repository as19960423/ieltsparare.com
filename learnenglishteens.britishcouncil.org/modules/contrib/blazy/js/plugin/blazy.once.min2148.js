!function(o,c){"use strict";var u="data-once",f="jQuery"in c,a="remove",s="set",v=/[\11\12\14\15\40]+/;function i(e,n,r){return n.filter(function(n){var t=o.is(n,e);return t&&r&&r(n),t})}function d(n,t){return o.findAll(t,n)}function h(n){return"["+u+'~="'+n+'"]'}function l(n,t){var e=t.add,r=t.remove,i=[];o.hasAttr(n,u)&&(t=o.attr(n,u).trim().split(v),o.each(t,function(n){o.contains(i,n)||n===r||i.push(n)})),e&&!o.contains(i,e)&&i.push(e);e=i.join(" ");o._op(n,""===e?a:s,u,e.trim())}function m(t,n,e){return i(":not("+h(t)+")",d(n,e),function(n){l(n,{add:t})})}o.once=function(n,t,e,r){var i=[];return o.isStr(n)&&o.isUnd(r)?m(n,t,e):(o.isUnd(e)?0:(i=m(t,e,r)).length&&o.each(i,n),i)},o.filter=i,o.once.find||(o.once.find=function(n,t){return d(n?h(n):"["+u+"]",t)},o.once.filter=function(n,t,e){return i(h(n),d(t,e))},o.once.remove=function(t,n,e,r){return i(h(t),d(n,e),function(n){l(n,{remove:t})})},o.once.removeSafely=function(n,t,e,r){var i=c.jQuery;this.find(n,e).length&&this.remove(n,t,e,r),f&&i&&i.fn&&o.isFun(i.fn.removeOnce)&&i(t,o.context(e)).removeOnce(n)})}(dBlazy,this);
