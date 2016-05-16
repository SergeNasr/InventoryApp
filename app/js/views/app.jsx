var React = require('react');
var Tabs = require('./tabs.jsx');
var Pane = require('./pane.jsx');
var MarketView = require('./marketView.jsx');
var AddButton = require('./button.jsx');
var InventoryView = require('./inventoryView.jsx');

var BackboneMixin = {
  componentDidMount: function() {
    // Whenever there may be a change in the Backbone data, trigger a reconcile.
    this.getBackboneModels().forEach(function(model) {
      model.on('add change remove', this.forceUpdate.bind(this, null), this);
    }, this);
  },

  componentWillUnmount: function() {
    // Ensure that we clean up any dangling references when the component is
    // destroyed.
    this.getBackboneModels().forEach(function(model) {
      model.off(null, null, this);
    }, this);
  }
};

var InventoryApp = React.createClass({
	mixins: [BackboneMixin],

	getBackboneModels: function() {
		return [this.props.inventoryList, this.props.marketList];
	},

	getDefaultProps: function() {
		return {
			mode: 'inventory'
		};
	},
	getInitialState: function() {
		return {
			mode: this.props.mode
		};
	},
	changeMode: function() {
		var newState = (this.state.mode === 'inventory' ? 'market' : 'inventory');
		this.setState({
			mode: newState
		});
	},
	render: function() {
		let selectedValue = 0;

		if (this.state.mode === 'market') selectedValue = 1;

		return(
			 <div>
	        	<Tabs selected={selectedValue} changeParentMode={this.changeMode}>
		          	<Pane label="Inventory">
		            	<InventoryView list={this.props.inventoryList} market={this.props.marketList}/>
		          	</Pane>
		          	<Pane label="Market">
		          		<MarketView list={this.props.inventoryList} market={this.props.marketList} />
		          	</Pane>
	        	</Tabs>
	        	<AddButton state={this.state.mode} list={this.props.inventoryList} />
      		</div>
		);
	}
});

module.exports = InventoryApp;