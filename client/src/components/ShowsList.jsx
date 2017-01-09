var React = require('react');

var ShowsList = React.createClass({

  render: function() {

    var showsElements = this.props.showsData.map( function( showData ) {
      return (
        <li key={ showData.id }>
          <a href={ showData.url }>{ showData.name }</a><span> >> </span>
          <a href={ showData.showTimesURL }>times</a>
        </li>
      )
    });

    return (
      <div>
        <h2>Shows</h2>
        <ul>
          { showsElements }
        </ul>
      </div>
    );
  }

});

module.exports = ShowsList;
