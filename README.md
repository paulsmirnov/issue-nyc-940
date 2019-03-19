# MWE for issue istanbuljs/nyc#940

It seems NYC fails to calculate coverage for both unit tests (per-source: `src/foo.test.js`) and integration tests (per-library: `test/integration.test.js`) at the same time.

    npm install
    npm run all

**Finally, I've reproduced** the crash when `foo()` function contains two lines. If you merge them in a single statement, the crash disappears.

    ...\issue-nyc-940\node_modules\nyc\node_modules\istanbul-lib-source-maps\lib\transformer.js:173
                mappedCoverage.addStatement(mapping.loc, hits);
                            ^

    TypeError: mappedCoverage.addStatement is not a function
        at D:\Projects\issue-nyc-940\node_modules\nyc\node_modules\istanbul-lib-source-maps\lib\transformer.js:173:28
        at Array.forEach (<anonymous>)
        at SourceMapTransformer.processFile (D:\Projects\issue-nyc-940\node_modules\nyc\node_modules\istanbul-lib-source-maps\lib\transformer.js:164:34)
        at D:\Projects\issue-nyc-940\node_modules\nyc\node_modules\istanbul-lib-source-maps\lib\transformer.js:255:24
        at Array.forEach (<anonymous>)
        at SourceMapTransformer.transform (D:\Projects\issue-nyc-940\node_modules\nyc\node_modules\istanbul-lib-source-maps\lib\transformer.js:245:25)
        at MapStore.transformCoverage (D:\Projects\issue-nyc-940\node_modules\nyc\node_modules\istanbul-lib-source-maps\lib\map-store.js:155:10)
        at SourceMaps.remapCoverage (D:\Projects\issue-nyc-940\node_modules\nyc\lib\source-maps.js:29:41)
        at NYC.getCoverageMapFromAllCoverageFiles (D:\Projects\issue-nyc-940\node_modules\nyc\index.js:439:30)
        at NYC.report (D:\Projects\issue-nyc-940\node_modules\nyc\index.js:445:18)

**Another issue** is a `bar()` function which is not covered, and `src/bar.js` is not mentioned in the coverage, although it is definitely used in the integration test.
