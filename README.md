React Grid Components
=======

A lightweight set of React components used to create a Bootstrap grid

##Features

* Three simple components: *Container*, *Row*, *Column*
* No dependencies except React
* Inline CSS

##Example

Load the components:

```js
var Container = require('react-grid-components/container');
var Row = require('react-grid-components/row');
var Column = require('react-grid-components/column');
```

Usage:

```html
<Container>
  <Row>
    <Column width={9}>
      Parent Column
      <Row>
        <Column width={6}>Child Column 1</Column>
        <Column width={6}>Child Column 2</Column>
      </Row>
    </Column>
  </Row>
  <Row>
    <Column width={3} offset={3}>Column with an offset 1</Column>
    <Column width={3} offset={3}>Column with an offset 2</Column>
  </Row>
</Container>
```

For more please see example folder in the git repo

##Optional CSS

To have a more consistent Bootstrap experience, you can add this global css rule (to your index.html)
However this is optional as the components have this included in the inline styles

```css
*{
  box-sizing: border-box;
}
```

##TODO

* Responsive features

##License

MIT
