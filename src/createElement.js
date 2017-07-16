const paper = require('paper-jsdom-canvas');

const {
  PaperScope,
  Item,
  Layer,
  Group,
  Raster,
  Shape,
  Path,
  PointText,
  Svg,
} = require('./Components');

function createElement(type, props, root) {
  let instance;

  switch (type) {
    case PaperScope:
      const scope = new paper.PaperScope();
      scope.settings.insertItems = false;
      scope.setup(props.canvas);
      scope.view.autoUpdate = true;
      scope.__promises__ = [];
      instance = scope;
      break;
    case Item:
      instance = new paper.Item(props);
      break;
    case Layer:
      instance = new paper.Layer(
        Object.assign({}, props, {
          children: [],
        })
      );
      break;
    case Group:
      instance = new paper.Group(
        Object.assign({}, props, {
          children: [],
        })
      );
      break;
    case Raster:
      instance = new paper.Raster(props);
      root.__promises__.push(
        new Promise(resolve => (instance.onLoad = resolve))
      );
      break;
    case Shape.Circle:
      instance = new paper.Shape.Circle(props);
      break;
    case Shape.Rectangle:
      instance = new paper.Shape.Rectangle(props);
      break;
    case Shape.Ellipse:
      instance = new paper.Shape.Ellipse(props);
      break;
    case Path.Line:
      instance = new paper.Path.Line(props);
      break;
    case Path.Circle:
      instance = new paper.Path.Circle(props);
      break;
    case Path.Rectangle:
      instance = new paper.Path.Rectangle(props);
      break;
    case Path.Ellipse:
      instance = new paper.Path.Ellipse(props);
      break;
    case Path.Arc:
      instance = new paper.Path.Arc(props);
      break;
    case Path.RegularPolygon:
      instance = new paper.Path.RegularPolygon(props);
      break;
    case Path.Star:
      instance = new paper.Path.Star(props);
      break;
    case PointText:
      instance = new paper.PointText(props);
      break;
    case Svg: {
      let resolve;
      root.__promises__.push(new Promise(_resolve => (resolve = _resolve)));
      instance = root.project.importSVG(props.svg, {
        insert: false,
        onLoad: resolve,
      });
      if (props.position) {
        instance.position = new paper.Point(
          props.position[0],
          props.position[1]
        );
      }
      break;
    }

    default:
      instance = undefined;
  }

  return instance;
}

module.exports = createElement;
