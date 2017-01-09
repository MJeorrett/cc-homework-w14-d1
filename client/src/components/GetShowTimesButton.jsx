var React = require('react');

var GetShowTimesButton = React.createClass({

  getInitialState: function() {
    return { showBear: false };
  },

  handleGetShowTimesClicked: function( e ) {
    this.setState({
      showBear: !this.state.showBear
    });
  },

  render: function() {
    return (
      <div>
        <button onClick={ this.handleGetShowTimesClicked }>
          { this.state.showBear ? "Hide Main Bear" : "Show Main Bear" }
        </button><br />
        <img src="bear.png" style={{ display: this.state.showBear ? 'inline-block' : 'none'}}/>
      </div>
    );
  }

});

module.exports = GetShowTimesButton;
