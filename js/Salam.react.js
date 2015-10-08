var React = require('react');
var PropTypes = React.PropTypes;

var Salam = React.createClass({

  render: function(){
    return <span>{this.props.text} <b>{this.props.to}</b></span>;
  }

});

module.exports = Salam;
