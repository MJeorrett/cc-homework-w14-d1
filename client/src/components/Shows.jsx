var React = require('react');

var ShowsList = require('./ShowsList');
var MoreShowsLink = require('./MoreShowsLink');
var GetShowTimesButton = require('./GetShowTimesButton');

var Shows = React.createClass({

  render: function() {
    return (
      <div>
        <h2>Shows</h2>
        <ShowsList />
        <MoreShowsLink /><br />
        <GetShowTimesButton />
      </div>
    );
  }

});

module.exports = Shows;
