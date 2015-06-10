var React = require('react');

module.exports = React.createClass ({
  displayName: 'Row',
  render: function () {

    var styles = {
      row: {
        marginLeft: '-15px',
        marginRight: '-15px',
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

    if (this.props.padding === 0 || this.props.padding){
      styles.row.paddingLeft = this.props.padding + 'px';
      styles.row.paddingRight = this.props.padding + 'px';
    }

    if (this.props.style){
      for (var key in this.props.style) { styles.row[key] = this.props.style[key]; }
    }

    return (
      React.createElement("div", null, 
        React.createElement("div", {style: styles.before}), 
        React.createElement("div", {style: styles.row}, 
          this.props.children
        ), 
        React.createElement("div", {style: styles.after})
      )
    );
  }
});
