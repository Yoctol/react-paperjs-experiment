const fs = require('fs');

const createElement = require('./createElement');
const PaperRenderer = require('./PaperRenderer');

function renderToPNG(element, canvas, filePath, callback) {
  const container = createElement('PaperScope', { canvas });
  const node = PaperRenderer.createContainer(container);

  PaperRenderer.updateContainer(element, node, null);

  Promise.all(container.__promises__).then(() => {
    container.view.exportImage(filePath, callback);
  });
}

function renderToBuffer(element, canvas, callback) {
  const container = createElement('PaperScope', { canvas });
  const node = PaperRenderer.createContainer(container);

  PaperRenderer.updateContainer(element, node, null);

  Promise.all(container.__promises__).then(() => {
    const buf = canvas.toBuffer();
    callback(buf);
  });
}

const ReactPaperNode = {
  renderToPNG,
  renderToBuffer,
};

module.exports = ReactPaperNode;
