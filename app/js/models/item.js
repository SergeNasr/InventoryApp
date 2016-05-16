var Backbone = require('backbone');

var Item = Backbone.Model.extend({
	defaults: {
		label: ''
	},
});

module.exports = Item;