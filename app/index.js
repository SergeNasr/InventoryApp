var React = require('react');
var ReactDOM = require('react-dom');
var InventoryApp = require('./js/views/app.jsx');

var stylesheet = require('./stylesheets/stylesheet.css');	// webpack css loader will add a stylesheet link to the DOM

var List = require('./js/collections/inventory');
var invList = new List();	// this would be replaced by actual lists fetched from a DB
var markList = new List();



var AppView = Backbone.View.extend({
	el: 'body',

	template: '<section class="app"></section>',

	render: function() {
		this.$el.html(this.template);
		ReactDOM.render(<InventoryApp inventoryList={invList} marketList={markList}/>, document.getElementsByClassName('app')[0]);
		return this;
	}
});

new AppView().render();