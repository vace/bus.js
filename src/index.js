module.exports = function bus(_this) {

  var events = Object.create(null),

    map = _this || Object.create(null),

    make = type => {
      let _type = ('' + type).toLowerCase()
      return events[_type] || (events[_type] = [])
    }

  map.on = (type, handler) => (make(type).push(handler), map)

  map.once = (type, handler) => {
    let _handle = event => {
      handler.call(map, event)
      map.off(type, _handle)
    }
    return map.on(type, _handle)
  }

  map.off = (type, handler) => {
    var arr = events[ type ]
    // clear all events
    if(type === '*'){
      events = Object.create(null)
    // empty events
    }else if(!handler || !arr || !arr.length){

    }else{
      var index = arr.indexOf(handler)
      if(index !== -1){
        arr.splice(index, 1)
      }
    }
    return map
  }

  map.emit = (type, event) => (make('*').concat(make(type)).forEach(handler => handler.call(map, event)), map)

  return map
}