var React = require('react');

var InventoryView = React.createClass({
	getInitialState: function() {
		return {
			list: this.props.list,
			market: this.props.market
		};
	},
	removeItem: function(item) {
		this.state.list.remove(item);
	},
	sellItem: function(item) {
		this.state.list.remove(item);
		this.state.market.add(item);
	},
	render: function() {
		var components = this.props.list.map(function(item, i) { //the "() =>"" notation makes sure that the value of onClick is a function, not a function call
			return (
				<div key={i} className="item">
					<button className="left-float" onClick={() => this.removeItem(item)}>X</button>
					<p>{item.toJSON().label}</p>
					<button className="right-float" onClick={() => this.sellItem(item)}>Sell ></button>
				</div>
			);
		}.bind(this));

		return (
			<div>{components}</div>
		);
	}
});

module.exports = InventoryView;