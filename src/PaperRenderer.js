const React = require('react');
const ReactFiberReconciler = require('react-dom/lib/ReactFiberReconciler');
const invariant = require('fbjs/lib/invariant');
const emptyObject = require('fbjs/lib/emptyObject');
const paper = require('paper-jsdom-canvas');

const createElement = require('./createElement');

const PaperRenderer = ReactFiberReconciler({
  appendChild(parentInstance, child) {
    if (
      parentInstance instanceof paper.PaperScope &&
      child instanceof paper.Item
    ) {
      parentInstance.project.activeLayer.addChild(child);
    }
  },

  appendInitialChild(parentInstance, child) {
    if (parentInstance instanceof paper.Group && child instanceof paper.Item) {
      parentInstance.addChild(child);
    }
  },

  commitTextUpdate(textInstance, oldText, newText) {
    // noop
  },

  commitMount(instance, type, newProps) {
    // TODO
  },

  commitUpdate(instance, updatePayload, type, oldProps, newProps, root) {
    // TODO
  },

  createInstance(type, props, root) {
    return createElement(type, props, root);
  },

  createTextInstance(text, rootContainerInstance, root) {
    // noop
  },

  finalizeInitialChildren(instance, type, props) {
    return false;
  },

  insertBefore(parentInstance, child, beforeChild) {
    // TODO
  },

  prepareForCommit() {
    // noop
  },

  prepareUpdate(instance, type, oldProps, newProps) {
    return true;
  },

  removeChild(parentInstance, child) {
    // TODO
  },

  resetAfterCommit() {
    // noop
  },

  resetTextContent(domElement) {
    // noop
  },

  getRootHostContext() {
    return emptyObject;
  },

  getChildHostContext() {
    return emptyObject;
  },

  getPublicInstance(instance) {
    return instance;
  },

  // scheduleAnimationCallback: () => {},
  //
  // scheduleDeferredCallback: () => {},

  shouldSetTextContent(props) {
    return (
      typeof props.children === 'string' || typeof props.children === 'number'
    );
  },

  useSyncScheduling: true,
});

module.exports = PaperRenderer;
