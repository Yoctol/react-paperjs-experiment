const React = require('react');
const ReactFiberReconciler = require('react-dom/lib/ReactFiberReconciler');
const invariant = require('fbjs/lib/invariant');
const emptyObject = require('fbjs/lib/emptyObject');
const paper = require('paper-jsdom-canvas');

const createElement = require('./createElement');

const PaperRenderer = ReactFiberReconciler({
  appendChild(parentInstance, child) {
    console.log('appendChild');
    if (
      parentInstance instanceof paper.PaperScope &&
      child instanceof paper.Item
    ) {
      parentInstance.project.activeLayer.addChild(child);
    }
  },

  appendInitialChild(parentInstance, child) {
    console.log('appendInitialChild');
    if (parentInstance instanceof paper.Group && child instanceof paper.Item) {
      parentInstance.addChild(child);
    }
  },

  commitTextUpdate(textInstance, oldText, newText) {
    console.log('commitTextUpdate');
  },

  commitMount(instance, type, newProps) {
    console.log('commitMount');
  },

  commitUpdate(instance, updatePayload, type, oldProps, newProps, root) {
    console.log('commitUpdate');
  },

  createInstance(type, props, root) {
    console.log('createInstance', type, props);
    return createElement(type, props, root);
  },

  createTextInstance(text, rootContainerInstance, root) {
    console.log('createTextInstance');
  },

  finalizeInitialChildren(domElement, type, props) {
    console.log('finalizeInitialChildren');
    return false;
  },

  insertBefore(parentInstance, child, beforeChild) {
    console.log('insertBefore');
  },

  prepareForCommit() {
    console.log('prepareForCommit');
  },

  prepareUpdate(domElement, type, oldProps, newProps) {
    console.log('prepareUpdate');
    return true;
  },

  removeChild(parentInstance, child) {
    console.log('removeChild');
  },

  resetAfterCommit() {
    console.log('resetAfterCommit');
  },

  resetTextContent(domElement) {
    console.log('resetTextContent');
  },

  getRootHostContext() {
    return emptyObject;
  },

  getChildHostContext() {
    return emptyObject;
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
