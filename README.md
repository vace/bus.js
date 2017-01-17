simple event emitter and pubsub

```javascript
var bus = require('bus')
var buser = bus()

// listen event
buser.on('event',callback)
// listen event once
buser.once('event',callback)
// trigger event with arguments
buser.emit('event',arg)
// remove listen
buser.off('event',callback)

```



```javascript
var bus = require('bus')

function People(){
	bus(this)
	this.on('speak', callback )
}

var human = new People()

human.on('event',callback)
human.once('event',callback)
human.emit('event',arg)
human.off('event',callback)

```

