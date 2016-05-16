var React = require('react');

// Note: here the underscore is to signal that renderContent should be private
var Tabs = React.createClass({
	propTypes: {
	    selected: React.PropTypes.number,
	    children: React.PropTypes.oneOfType([
	      React.PropTypes.array,
	      React.PropTypes.element
	    ]).isRequired
  	},
	getDefaultProps: function() {	// first lifeCycle method called on render
		return {
	    	selected: 0
	    };
	},
	getInitialState: function() {	// second lifeCycle method called on render
	    return {
	    	selected: this.props.selected
	    };
	},
	handleClick: function(index, label, event) {
	    event.preventDefault();
	    this.props.changeParentMode();
	    this.setState({
	    	selected: index
	    });
	},
	_renderTitles: function() {
	    function labels(child, index) {
	    	let activeClass = (this.state.selected === index ? 'active' : '');
	    	return (
	        	<li key={index}>
	        		<a href="#" 
	            		className={activeClass}
	            		onClick={this.handleClick.bind(this, index, child.props.label)}>
	            		{child.props.label}
	          		</a>
	        	</li>
	        );
	    }
	    return (
	    	<ul className="tabs__labels">
	        	{this.props.children.map(labels.bind(this))}
	    	</ul>
	    );
	},
	_renderContent: function() {
	    return (
	    	<div className="tabs__content">
	        	{this.props.children[this.state.selected]}
	    	</div>
	    );
	},
	render: function() {
	    return (
	    	<div className="tabs">
	        	{this._renderTitles()}
	        	{this._renderContent()}
	    	</div>
	    );
	}
});

module.exports = Tabs;