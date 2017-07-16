const React = require('react');
const paper = require('paper-jsdom-canvas');

const { Group, PointText, Path, Raster, Svg } = require('../src');
const { renderToPNG } = require('../node');

const svg =
  '<svg width="100" height="100"><circle cx="220" cy="250" r="40" stroke="green" stroke-width="4" /></svg>';

const App = () =>
  <Group>
    <Raster source="http://assets.paperjs.org/images/marilyn.jpg" />
    <PointText point={[200, 200]} content="Hello" fontSize={35} />
    <Path.Rectangle point={[0, 0]} size={[300, 35]} strokeColor="black" />
    <Path.Rectangle point={[0, 35]} size={[300, 265]} strokeColor="black" />
    <Svg svg={svg} />
  </Group>;

const canvas = paper.createCanvas(300, 300);

renderToPNG(<App />, canvas, __dirname + '/paper.png');
