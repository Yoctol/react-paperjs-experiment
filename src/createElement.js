const paper = require('paper-jsdom-canvas');

const {
  PaperScope,
  Item,
  Group,
  Raster,
  Shape,
  Path,
  PointText,
} = require('./Components');

function createElement(type, props, root) {
  let instance;

  switch (type) {
    case PaperScope:
      const scope = new paper.PaperScope();
      scope.settings.insertItems = false;
      scope.setup(props.canvas);
      scope.view.autoUpdate = true;
      instance = scope;
      break;
    case Group:
      instance = new paper.Group([]);
      break;
    case Path.Rectangle:
      instance = new paper.Path.Rectangle(props.point, props.size);
      instance.strokeColor = props.strokeColor;
      break;
    case PointText:
      instance = new paper.PointText(props);
      break;
    default:
      instance = undefined;
  }

  return instance;
}

module.exports = createElement;
