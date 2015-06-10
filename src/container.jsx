var React = require('react');
var breakpoints = require('./breakpoints.json');


module.exports = React.createClass ({
  displayName: 'Container',

  getDefaultProps: function() {
    return {
      fluid: false
    };
  },

  pageWidth : document.body.clientWidth,

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

    if (this.props.fluid === false){
      var self = this;
      breakpoints.forEach(function(breakpoint, index){
        if(breakpoint.breakpoint !== undefined && breakpoint.breakpoint < self.pageWidth){
          styles.container.width = breakpoint.container;
        }
      });
    }

    if (this.props.style){
      for (var key in this.props.style) { styles.container[key] = this.props.style[key]; }
    }

    return (
      <div>
        <div style={styles.before}></div>
        <div style={styles.container}>
          {this.props.children}
        </div>
        <div style={styles.after}></div>
      </div>
    );
  }
});
