var React = require('react');

var Show = React.createClass({

  render: function() {
    var showData = this.props.showData;
    return (
      <li key={ this.props.key }>
        <a href={ showData.url }>{ showData.name }</a><span> >> </span>
        <a href={ showData.showTimesURL }>times</a>
      </li>
    )
  }

});

module.exports = Show;
