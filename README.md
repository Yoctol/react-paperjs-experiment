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

const { Group, PointText, Shape, Path, Raster, Svg } = require('react-paperjs-experiment/lib/Components');
const { renderToPNG } = require('react-paperjs-experiment');

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

## API

### renderToPNG(element, canvas, path, callback)

### renderToBuffer(element, canvas, callback)

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
