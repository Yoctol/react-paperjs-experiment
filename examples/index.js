const React = require('react');

const { Group, Path } = require('../src/Components');
const { renderToPNG } = require('../src/node');

const App = () =>
  <Group>
    <Path.Rectangle point={[0, 0]} size={[300, 35]} strokeColor="black" />
    <Path.Rectangle point={[0, 35]} size={[300, 265]} strokeColor="black" />
    <Path.Rectangle point={[0, 300]} size={[300, 80]} strokeColor="black" />
  </Group>;

renderToPNG(<App />, __dirname + '/paper.png');
