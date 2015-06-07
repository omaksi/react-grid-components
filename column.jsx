var React = require('react');

module.exports = React.createClass ({
  displayName: 'Column',
  render: function () {

    var styles = {
      col: {
        position: 'relative',
        minHeight: '1px',
        paddingLeft: '15px',
        paddingRight: '15px',
        float: 'left',
        boxSizing: 'border-box'
      }
    };

    if (this.props.padding){
      styles.col.paddingLeft = this.props.padding + 'px';
      styles.col.paddingRight = this.props.padding + 'px';
    }

    if (this.props.style){
      for (var key in this.props.style) { styles.col[key] = this.props.style[key]; }
    }

    if (this.props.width) {
      styles.col.width = ((this.props.width/12)*100) + '%';
    }

    if (this.props.pull) {
      styles.col.right = ((this.props.pull/12)*100) + '%';
    }

    if (this.props.push) {
      styles.col.left = ((this.props.push/12)*100) + '%';
    }

    if (this.props.offset) {
      styles.col.marginLeft = ((this.props.offset/12)*100) + '%';
    }

    return (
      <div style={styles.col}>
        {this.props.children}
      </div>
    );
  }
});
