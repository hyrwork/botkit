var EventEmitter = require('events').EventEmitter;
var util = require('util');

function RTMProxy(opts){
  console.log('rtm: called with args: ', Array.prototype.slice.call(arguments));
  opts = opts || {};

  this.onSend = opts.onSend;
  if(typeof this.onSend !== 'function'){
    this.onSend = function(str, cb){
      console.warn('RTMProxy missing an `onSend(str, cb)` handler');
      cb(null);
    };
  }


}

util.inherits(RTMProxy, EventEmitter); // Inherit from EventEmitter

RTMProxy.prototype.close = function(){
  console.log('RTMProxy.close()...');
};

RTMProxy.prototype.ping = function(){
  console.log('RTMProxy.ping()...');
};

RTMProxy.prototype.send = function(str, cb){
  console.log('RTMProxy.send()...');
  this.onSend(str, cb)
};

module.exports = RTMProxy;