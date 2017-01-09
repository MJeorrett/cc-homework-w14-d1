var React = require('react');

var ShowsList = require('./ShowsList');
var ViewMoreBearsButton = require('./ViewMoreBearsButton');
var MainBearButton = require('./MainBearButton');

var showsData = require('../mockShowData');

var Shows = React.createClass({

  render: function() {
    return (
      <div>
        <h2>Shows</h2>
        <ShowsList showsData={ showsData }/>
        <MainBearButton />
        <ViewMoreBearsButton /><br />
      </div>
    );
  }

});

module.exports = Shows;
