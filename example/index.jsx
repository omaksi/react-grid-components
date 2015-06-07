var React = require('react');

var Container = require('react-grid-components/container.jsx');
var Row = require('react-grid-components/row.jsx');
var Column = require('react-grid-components/column.jsx');

var App = React.createClass ({
  render: function () {
    var s = {
      backgroundColor: '#f3f3f3',
      border: '1px solid #e3e3e3',
      paddingTop: '10px',
      paddingBottom: '10px',
    };
    return (
        <div>
          <Container>
            <Row>
              <Column style={s} width={1}>width={1}</Column>
              <Column style={s} width={1}>width={1}</Column>
              <Column style={s} width={1}>width={1}</Column>
              <Column style={s} width={1}>width={1}</Column>
              <Column style={s} width={1}>width={1}</Column>
              <Column style={s} width={1}>width={1}</Column>
              <Column style={s} width={1}>width={1}</Column>
              <Column style={s} width={1}>width={1}</Column>
              <Column style={s} width={1}>width={1}</Column>
              <Column style={s} width={1}>width={1}</Column>
              <Column style={s} width={1}>width={1}</Column>
              <Column style={s} width={1}>width={1}</Column>
            </Row>

            <Row>
              <Column style={s} width={8}>width={8}</Column>
              <Column style={s} width={4}>width={4}</Column>
            </Row>

            <Row>
              <Column style={s} width={4}>width={4}</Column>
              <Column style={s} width={4}>width={4}</Column>
              <Column style={s} width={4}>width={4}</Column>
            </Row>

            <Row>
              <Column style={s} width={6}>width={6}</Column>
              <Column style={s} width={6}>width={6}</Column>
            </Row>

            <Row>
              <Column style={s} width={9}>width={9}</Column>
              <Column style={s} width={4}>width={4}</Column>
              <Column style={s} width={6}>width={6}</Column>
            </Row>

            <Row>
              <Column style={s} width={4}>width={4}</Column>
              <Column style={s} width={4} offset={4}>width={4} offset={4}</Column>
            </Row>

            <Row>
              <Column style={s} width={3} offset={3}>width={3} offset={3}</Column>
              <Column style={s} width={3} offset={3}>width={3} offset={3}</Column>
            </Row>

            <Row>
              <Column style={s} width={6} offset={3}>width={6} offset={3}</Column>
            </Row>

            <Row>
              <Column style={s} width={9}>
                width={9}
                <Row>
                  <Column style={s} width={6}>width={6}</Column>
                  <Column style={s} width={6}>width={6}</Column>
                </Row>
              </Column>
            </Row>
          </Container>
        </div>
    );
  }
});

React.render(<App/>, document.getElementById("content"));
