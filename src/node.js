const fs = require('fs');

const paper = require('paper-jsdom-canvas');

const createElement = require('./createElement');
const PaperRenderer = require('./PaperRenderer');

function renderToPNG(element, filePath, callback) {
  const canvas = paper.createCanvas(300, 460);
  const container = createElement('PaperScope', { canvas });
  const node = PaperRenderer.createContainer(container);

  PaperRenderer.updateContainer(element, node, null);

  container.view.exportImage(filePath, callback);
}

function renderToBuffer(element, callback) {
  const canvas = paper.createCanvas(300, 460);
  const container = createElement('PaperScope', { canvas });
  const node = PaperRenderer.createContainer(container);

  PaperRenderer.updateContainer(element, node, null);

  const buf = canvas.toBuffer();

  callback(buf);
}

const ReactPaperNode = {
  renderToPNG,
  renderToBuffer,
};

module.exports = ReactPaperNode;
