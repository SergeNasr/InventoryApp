var Backbone = require('backbone');
var Item = require('../models/item');
Backbone.LocalStorage = require('backbone.localstorage');

var InventoryList = Backbone.Collection.extend({
	model: Item,

	localStorage: new Backbone.LocalStorage("InventoryList"),
});

module.exports = InventoryList;