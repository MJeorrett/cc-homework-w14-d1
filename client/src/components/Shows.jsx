var React = require('react');

var ShowsList = require('./ShowsList');
var MoreShowsLink = require('./MoreShowsLink');

var Shows = React.createClass({

  render: function() {
    return (
      <div>
        <h2>Shows</h2>
        <ShowsList />
        <MoreShowsLink />
      </div>
    );
  }

});

module.exports = Shows;
