/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule emptyObject
 */

'use strict';

const emptyObject = {};

if (process.env.NODE_ENV === 'development') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;
