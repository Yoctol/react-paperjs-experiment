'use strict';

const React = require('react');
const Reconciler = require('react-reconciler');
const invariant = require('invariant');
const paper = require('paper-jsdom-canvas');
const requestIdleCallback = require('ric-shim');
const now = require('performance-now');

const createElement = require('./createElement');
const emptyObject = require('./emptyObject');

const PaperRenderer = Reconciler({
  appendInitialChild(parentInstance, child) {
    if (parentInstance instanceof paper.Group && child instanceof paper.Item) {
      parentInstance.addChild(child);
    }
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

  getPublicInstance(instance) {
    return instance;
  },

  prepareForCommit() {
    // noop
  },

  prepareUpdate(instance, type, oldProps, newProps) {
    return true;
  },

  resetAfterCommit() {
    // noop
  },

  resetTextContent(wordElement) {
    // noop
  },

  shouldDeprioritizeSubtree(type, props) {
    return false;
  },

  getRootHostContext() {
    return emptyObject;
  },

  getChildHostContext() {
    return emptyObject;
  },

  shouldSetTextContent(props) {
    return (
      typeof props.children === 'string' || typeof props.children === 'number'
    );
  },

  // enableNoopReconciler: true,

  scheduleDeferredCallback: requestIdleCallback,

  now,

  mutation: {
    appendChild(parentInstance, child) {
      if (
        parentInstance instanceof paper.PaperScope &&
        child instanceof paper.Item
      ) {
        parentInstance.project.activeLayer.addChild(child);
      }
    },

    appendChildToContainer(parentInstance, child) {
      // ??
    },

    removeChild(parentInstance, child) {
      // TODO
    },

    removeChildFromContainer(parentInstance, child) {
      // ??
    },

    insertBefore(parentInstance, child, beforeChild) {
      // TODO
    },

    commitUpdate(instance, updatePayload, type, oldProps, newProps, root) {
      // TODO
    },

    commitMount(instance, type, newProps) {
      // TODO
    },

    commitTextUpdate(textInstance, oldText, newText) {
      // noop
    },
  },
});

module.exports = PaperRenderer;
