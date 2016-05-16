var React = require('react');

var MarketView = React.createClass({
	getInitialState: function() {
		return {
			list: this.props.list,
			market: this.props.market
		};
	},
	removeItemFromMarket: function(item) {
		this.state.market.remove(item);
		this.state.list.add(item);
	},
	render: function() {
		var components = this.props.market.map(function(item, i) {
			return (
				<div key={i} className="item">
					<button className="left-float" onClick={() => this.removeItemFromMarket(item)}>&lt;</button>
					<p>{item.toJSON().label}</p>
				</div>
			);
		}.bind(this));

		return (
			<div>{components}</div>
		);
	}
}); 

module.exports = MarketView;