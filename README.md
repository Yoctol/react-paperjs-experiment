# react-paperjs-experiment

[![npm](https://img.shields.io/npm/v/react-paperjs-experiment.svg?style=flat-square)](https://www.npmjs.com/package/react-paperjs-experiment)

Caution: This library only supports first time rendering at this moment, so any re-rendering behavior with react will not work.

## Installation

```sh
npm i --save react-paperjs-experiment
```
or
```sh
yarn add react-paperjs-experiment
```

## Usage

```jsx
const React = require('react');
const paper = require('paper-jsdom-canvas');

const { Group, PointText, Shape, Path, Raster, Svg } = require('react-paperjs-experiment');
const { renderToPNG } = require('react-paperjs-experiment/node');

const svg =
  '<svg width="100" height="100"><circle cx="220" cy="250" r="40" stroke="green" stroke-width="4" /></svg>';

const App = () =>
  <Group>
    <Raster source="http://assets.paperjs.org/images/marilyn.jpg" />
    <PointText point={[200, 200]} content="Hello" fontSize={35} />
    <Shape.Rectangle point={[0, 0]} size={[300, 35]} strokeColor="black" />
    <Path.Rectangle point={[0, 35]} size={[300, 265]} strokeColor="black" />
    <Svg svg={svg} />
  </Group>;

const canvas = paper.createCanvas(300, 300);

renderToPNG(<App />, canvas, __dirname + '/paper.png');
```

See the basic example at [examples](./examples) folder.

## API

### renderToPNG(element, canvas, path, callback)

```jsx
const React = require('react');
const paper = require('paper-jsdom-canvas');
const { Group, Path } = require('react-paperjs-experiment');
const { renderToPNG } = require('react-paperjs-experiment/node');

const canvas = paper.createCanvas(300, 300);

renderToPNG(
  <Group>
    <Path.Rectangle point={[0, 35]} size={[300, 265]} strokeColor="black" />
  </Group>,
  canvas,
  __dirname + '/paper.png',
  () => { console.log('done'); }
)
```

### renderToBuffer(element, canvas, callback)

```jsx
const React = require('react');
const paper = require('paper-jsdom-canvas');
const { Group, Path } = require('react-paperjs-experiment');
const { renderToBuffer } = require('react-paperjs-experiment/node');

const canvas = paper.createCanvas(300, 300);

renderToPNG(
  <Group>
    <Path.Rectangle point={[0, 35]} size={[300, 265]} strokeColor="black" />
  </Group>,
  canvas,
  buffer => { console.log(buffer); }
)
```

### Components
- Item
- Layer
- Group
- Raster
- Shape.Circle
- Shape.Rectangle
- Shape.Ellipse
- Path.Line
- Path.Circle
- Path.Rectangle
- Path.Ellipse
- Path.Arc
- Path.RegularPolygon
- Path.Star
- PointText
- Svg

[Paper.js official document](http://paperjs.org/reference/global/)
