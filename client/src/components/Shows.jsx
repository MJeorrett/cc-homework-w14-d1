var React = require('react');

var ShowsList = require('./ShowsList');

var Shows = React.createClass({

  render: function() {
    return (
      <div>
        <h2>Shows</h2>
        <ShowsList />
      </div>
    );
  }

});

module.exports = Shows;
