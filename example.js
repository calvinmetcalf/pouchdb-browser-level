'use strict';

var LevelPouch = require('pouchdb-browser-level');
var leveldown = require('level-js');
var utils = LevelPouch.utils;
var PouchDB = require('pouchdb');
function BrowserLevel(opts, callback) {
  var _opts = utils.extend({
    db: leveldown
  }, opts);

  LevelPouch.call(this, _opts, callback);
}

// overrides for normal LevelDB behavior on Node
BrowserLevel.valid = function () {
  return 'idb' in PouchDB.adapters &&
    PouchDB.adapters.idb.valid();
};
BrowserLevel.use_prefix = true;

BrowserLevel.destroy = utils.toPromise(function (name, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  var _opts = utils.extend({
    db: leveldown
  }, opts);

  return LevelPouch.destroy(name, _opts, callback);
});
PouchDB.adapter('idb-alt', BrowserLevel);
PouchDB.preferredAdapters.unshift('idb-alt');