const React = require('react');
const paper = require('paper-jsdom-canvas');

const { Group, PointText, Path } = require('../src/Components');
const { renderToPNG } = require('../src/node');

const App = () =>
  <Group>
    <PointText point={[200, 200]} content="Hello" fontSize={35} />
    <Path.Rectangle point={[0, 0]} size={[300, 35]} strokeColor="black" />
    <Path.Rectangle point={[0, 35]} size={[300, 265]} strokeColor="black" />
  </Group>;

const canvas = paper.createCanvas(300, 300);

renderToPNG(<App />, canvas, __dirname + '/paper.png');
