import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'collection-ts-path-transform',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-collection',
      dir: 'dist',
      collectionDir: './dist/collection'
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
