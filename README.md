simple event emitter and pubsub

```javascript
var bus = require('bus')
var buser = bus()

buser.on('event',callback)
buser.once('event',callback)
buser.emit('event',callback)
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
human.emit('event',callback)
human.off('event',callback)

```

