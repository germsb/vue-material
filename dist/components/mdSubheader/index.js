/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=438)})({0:function(e,t){e.exports=function(e,t,n,r){var o,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(o=e,s=e.default);var a="function"==typeof s?s.options:s;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var i=a.computed||(a.computed={});Object.keys(r).forEach((function(e){var t=r[e];i[e]=function(){return t}}))}return{esModule:o,exports:s,options:a}}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},100:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-subheader",u.default),e.material.styles.push(i.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var s=n(324),u=r(s),a=n(264),i=r(a);e.exports=t.default},163:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=(function(e){return e&&e.__esModule?e:{default:e}})(r);t.default={mixins:[o.default]},e.exports=t.default},231:function(e,t){},264:function(e,t){e.exports=".THEME_NAME.md-subheader.md-primary{color:PRIMARY-COLOR}.THEME_NAME.md-subheader.md-accent{color:ACCENT-COLOR}.THEME_NAME.md-subheader.md-warn{color:WARN-COLOR}\n"},324:function(e,t,n){n(231);var r=n(0)(n(163),n(393),null,null);e.exports=r.exports},393:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return"md-list"===e.$parent.$options._componentTag?n("li",{staticClass:"md-subheader",class:[e.themeClass]},[e._t("default")],2):n("div",{staticClass:"md-subheader",class:[e.themeClass]},[e._t("default")],2)},staticRenderFns:[]}},438:function(e,t,n){e.exports=n(100)}})}));