var React = require('react');

var ViewMoreBearsButton = React.createClass({

  getInitialState: function() {
    return ({
      bearCount: 0,
      breadingInProgress: false
    });
  },

  handleButtonClicked: function() {
    this.setState(
      {
        breadingInProgress: !this.state.breadingInProgress
      },
      function() {
        this.startBearing();
      }
    );
  },

  startBearing: function() {
    this.setState({
      bearCount: this.state.bearCount + 1
    });
    if ( this.state.breadingInProgress ) {
      setTimeout( this.startBearing, 200 );
    }
  },

  render: function() {

    var bears = [];
    for ( var i = 0; i < this.state.bearCount; i++ ) {
      bears.push(
        <img
          className="small-bear"
          key={ i.toString() }
          src="bear.png"
        ></img>
      );
    }

    return (
      <div>
        <button onClick={ this.handleButtonClicked }>
          { this.state.breadingInProgress ? "Stop Breading" : "View More Bears" }
        </button>
        <div id="small-bears-container">
          { bears }
        </div>
      </div>
    );
  }

});

module.exports = ViewMoreBearsButton;
