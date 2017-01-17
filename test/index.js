var bus = require('../src/index.js');
var should = require('should')
var sinon = require('sinon')

require('should-sinon')

/* global describe,it,beforeEach */

describe('bus',() => {
	it('bus should be a function', () => should(bus).be.a.Function() )
})

describe('bus()',() => {
	var event = bus()
	it('.on() should be a function',() => should(event.on).be.a.Function())
	it('.once() should be a function',() => should(event.once).be.a.Function())
	it('.emit() should be a function',() => should(event.emit).be.a.Function())
	it('.off() should be a function',() => should(event.off).be.a.Function())
})

describe('bus api test',() => {
	var event_bus
	beforeEach(() => {
		event_bus = bus()
	})

	it('should return testvalue',done => {
		var arg = 'testvalue'
		event_bus.on('test',function(testvalue){
			testvalue.should.equal(arg)
			done()
		}).emit('test',arg)
	})

	it('should return object',function(done){
		var user = {name:'vace',tel:'dev'}
		event_bus.once('test',function(arg){
			arg.should.deepEqual(user)
			done()
		})
		event_bus.emit('test',user)
	})


	it('emit thrice should be call thrice',() => {
		var callback = sinon.spy()
		event_bus.on('event_name',callback)
				 .emit('event_name')
				 .emit('event_name')
				 .emit('event_name')
		callback.should.be.calledThrice()
	})

	it('once should be call once',() => {
		var callback = sinon.spy()
		event_bus.once('event_name',callback)
				 .emit('event_name')
				 .emit('event_name')
				 .emit('event_name')
		callback.should.be.calledOnce()
	})


	it('off should be remove callback',() => {
		var callback = sinon.spy()
		event_bus.on('event_name',callback)
				 .off('event_name',callback)
				 .emit('event_name')
				 .emit('event_name')
				 .emit('event_name')

		callback.should.not.called()
	})
})


describe('bus extends test',() => {

	var callback = sinon.spy()

	function People(name){
		bus(this)
		this.name = name
		this.on('speak', callback )
	}

	var human
	beforeEach(() => {
		human = new People()
	})

	it('.on() should be a function',() => should(human.on).be.a.Function())
	it('.once() should be a function',() => should(human.once).be.a.Function())
	it('.emit() should be a function',() => should(human.emit).be.a.Function())
	it('.off() should be a function',() => should(human.off).be.a.Function())

	it('human.speak emit',() => {
		human.emit('speak','content')
		callback.should.be.calledOnce().and.calledWith('content').and.alwaysCalledOn(human)
	})


})

