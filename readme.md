Issue 2: Race Condition

It seems that adding `transformAliasedImportPathsInCollection: true` to `dist` _and_ having a dist-collections output target yields broken JS
I have a hunch that this is a race condition, but haven't confirmed.

This branch was initialized with `npm init stencil component-ts-path-transform`.
I then built a local version of Stencil from https://github.com/ionic-team/stencil/pull/3559/commits/641ac7c580e2653efcb2ff5c26eb2f2530dbd72f, `npm pack`'ed it, and checked it in at the root level of the directory
You're welcome to rebuild locally and use that, I only included it as having `package.json` point to a local version of Stencil you've built in a reproduction branch like this often yields SHA mismatches.

In this repo, you should find three items of interest in `./output/`:

```
output
├── default-config
├── output.diff
└── transform-aliased-import-paths-true
```

where:
- `default-config/` is the output of running `npm run build`
- `transform-aliased-import-paths-true/` is the output of running `npm run build` with `dist: { transformAliasedImportPathsInCollection: true }` along with a `dist-collections` output target set in `stencil.config.ts`
  - **I'm assuming `dist-collections` is properly set up here, but I couldn't replicate using the latest public version of Stencil. Then again, this is a race condition**
- `output.diff` is the result of `diff -r output/default-config transform-aliased-import-paths-true`

Take a look at `output.diff` to see the bad JS.

