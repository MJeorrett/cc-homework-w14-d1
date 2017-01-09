var React = require('react');

var MainBearButton = React.createClass({

  getInitialState: function() {
    return {
      showBear: false,
      showHideCount: 0
    };
  },

  handleGetShowTimesClicked: function( e ) {
    var showHideCountIncrement = this.state.showBear ? 0 : 1;
    this.setState({
      showBear: !this.state.showBear,
      showHideCount: this.state.showHideCount + showHideCountIncrement
    });
  },

  render: function() {
    return (
      <div>
        <button onClick={ this.handleGetShowTimesClicked }>
          { this.state.showBear ? "Hide Main Bear" : "Show Main Bear" }
        </button><br />
      <img id="main-bear" className={ this.state.showHideCount % 2 === 1 ? "" : "flipped-img" } src="mainBear.png" style={{ display: this.state.showBear ? "inline-block" : "none"}}/>
      </div>
    );
  }

});

module.exports = MainBearButton;
