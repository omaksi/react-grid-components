var React = require('react');

module.exports = React.createClass ({

  render: function () {

    var styles = {
      row: {
        marginLeft: '15px',
        marginRight: '15px',
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

    if (this.props.padding){
      styles.row.marginLeft = this.props.padding + 'px';
      styles.row.marginRight = this.props.padding + 'px';
    }

    if (this.props.style){
      for (var key in this.props.style) { styles.row[key] = this.props.style[key]; }
    }

    return (
      <div>
        <div style={styles.before}></div>
        <div style={styles.row}>
          {this.props.children}
        </div>
        <div style={styles.after}></div>
      </div>
    );
  }
});
