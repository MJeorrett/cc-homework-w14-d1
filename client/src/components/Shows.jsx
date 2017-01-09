var React = require('react');

var ShowsList = require('./ShowsList');
var ViewMoreBearsButton = require('./ViewMoreBearsButton');
var MainBearButton = require('./MainBearButton');

var Shows = React.createClass({

  render: function() {
    return (
      <div>
        <h2>Shows</h2>
        <ShowsList />
        <MainBearButton />
        <ViewMoreBearsButton /><br />
      </div>
    );
  }

});

module.exports = Shows;
