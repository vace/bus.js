!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.bus=t():e.bus=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";e.exports=function(e){var t=Object.create(null),n=e||Object.create(null),r=function(e){var n=(""+e).toLowerCase();return t[n]||(t[n]=[])};return n.on=function(e,t){return r(e).push(t),n},n.once=function(e,t){var r=function r(o){t.call(n,o),n.off(e,r)};return n.on(e,r)},n.off=function(e,r){var o=t[e];if("*"===e)t=Object.create(null);else if(r&&o&&o.length){var u=o.indexOf(r);u!==-1&&o.splice(u,1)}else;return n},n.emit=function(e,t){return r("*").concat(r(e)).forEach(function(e){return e.call(n,t)}),n},n}}])});