var React = require('react');

var AddButton = React.createClass({
	getInitialState: function() {
		return {
			input: ''
		};
	},
	_addClick: function(event) {
		if (this.state.input) {
			this.props.list.create({
				label: this.state.input
			});

			this.setState({
				input: ''
			});
		}
	},
	_handleInput: function(event) {
		var val = event.target.value;
		this.setState({
			input: val
		});
	},
	_handleKeyPress: function(e) {
		if (e.key === 'Enter') {
			this._addClick();
		}
	},
	render: function() {
		if (this.props.state === 'inventory') {
			return (
				<div className="add-item">
					<input className="add-item-text" 
						type="text" 
						placeholder="New item" 
						value={this.state.input} 
						onChange={this._handleInput} 
						onKeyPress={this._handleKeyPress} />
					<button className="add-item-button" onClick={this._addClick}>+</button>
				</div>
			);
		}
		else {
			return (<div></div>);
		}
	}
});

module.exports = AddButton;