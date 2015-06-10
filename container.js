var React = require('react');

module.exports = React.createClass ({
  displayName: 'Container',

  getInitialState: function(){

  },
  
  render: function () {

    var styles = {
      container: {
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingLeft: '15px',
        paddingRight: '15px',
        boxSizing: 'border-box',
      },
      before: {
        content: ' ',
        display: 'table',
      },
      after: {
        content: ' ',
        display: 'table',
        clear: 'both',
      }
    };

    if (this.props.style){
      for (var key in this.props.style) { styles.container[key] = this.props.style[key]; }
    }

    return (
      React.createElement("div", null, 
        React.createElement("div", {style: styles.before}), 
        React.createElement("div", {style: styles.container}, 
          this.props.children
        ), 
        React.createElement("div", {style: styles.after})
      )
    );
  }
});
