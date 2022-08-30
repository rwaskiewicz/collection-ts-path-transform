'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8ef4c5a0.js');

/*
 Stencil Client Patch Esm v0.0.0-dev.20220830190520 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
