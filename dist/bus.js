'use strict';

module.exports = function bus(_this) {

  var events = Object.create(null),
      map = _this || Object.create(null),
      make = function make(type) {
    var _type = ('' + type).toLowerCase();
    return events[_type] || (events[_type] = []);
  };

  map.on = function (type, handler) {
    return make(type).push(handler), map;
  };

  map.once = function (type, handler) {
    var _handle = function _handle(event) {
      handler.call(map, event);
      map.off(type, _handle);
    };
    return map.on(type, _handle);
  };

  map.off = function (type, handler) {
    var arr = make(type),
        index = arr.indexOf(handler);
    index !== -1 && arr.splice(index, 1);
    return map;
  };

  map.emit = function (type, event) {
    return make('*').concat(make(type)).forEach(function (handler) {
      return handler.call(map, event);
    }), map;
  };

  return map;
};
