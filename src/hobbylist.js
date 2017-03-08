import React from 'react';

var List = React.createClass({
  render: function()
  {
    return (
      this.props.data.map(function(item){
        return <data item={item} />
      })
    )
  }
});
