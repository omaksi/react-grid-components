React Grid Compoenents
=======

A lightweight set of React components used to create a Bootstrap grid

##Features

* Three simple components: Container, Row, Column
* No dependencies except React
* Inline CSS

##Example

```html
<Container>
  <Row>
    <Column style={s} width={9}>
      Parent Column
      <Row>
        <Column style={s} width={6}>Child Column 1</Column>
        <Column style={s} width={6}>Child Column 2</Column>
      </Row>
    </Column>
  </Row>
  <Row>
    <Column style={s} width={3} offset={3}>Column with an offset 1</Column>
    <Column style={s} width={3} offset={3}>Column with an offset 2</Column>
  </Row>
</Container>
```

For more please see example folder in the git repo

##TODO

* Responsive features

##License

ISC
