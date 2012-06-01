var Proxy = require('./proxy');
var Channel = require('./channel');
var IRC = require('./node_modules/irc/irc').IRC;

var channel = new Channel();
module.exports = new Proxy(IRC.prototype, 'irc', channel);
