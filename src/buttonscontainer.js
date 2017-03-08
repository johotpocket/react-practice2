import React from 'react';

var Button1 = React.createClass({
  render: function()
  {
    return (
      <div className="container my-container">
        <button> {this.props.sentence} </button>
      </div>
    )
  }
});

export default Button1;
