const fs = require('fs');

const createElement = require('./createElement');
const PaperRenderer = require('./PaperRenderer');

function renderToPNG(element, canvas, filePath, callback) {
  const container = createElement('PaperScope', { canvas });
  const node = PaperRenderer.createContainer(container);

  PaperRenderer.updateContainer(element, node, null);

  container.view.exportImage(filePath, callback);
}

function renderToBuffer(element, canvas, callback) {
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
