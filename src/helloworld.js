import React from 'react';
import Button from './buttonscontainer';

var HelloWorld = React.createClass({
  render: function()
  {
    return (
      <div>
        <div className="jumbotron my-jumbotron">
          <h1> Hello World!! </h1>
        </div>
        <div>
        < Paragraph />
        < Button sentence={"maybe another time, cousin"} />
        < Button sentence={"sure, lets go bowling"} />
        </div>
      </div>
    )
  }
});

var Paragraph = React.createClass({
  render: function()
  {
    return (
      <div className="container my-container">
        <p> Hey Nico! Lets go bowling </p>
      </div>
    )
  }
});

export default HelloWorld;
