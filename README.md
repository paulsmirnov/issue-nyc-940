# MWE for issue istanbuljs/nyc#940

It seems NYC fails to calculate coverage for both unit tests (per-source: `src/foo.test.js`) and integration tests (per-library: `test/integration.test.js`) at the same time.

    npm install
    npm run all

Unfortunately, the crash is not reproduced in this setup yet, only wrong coverage is generated (`src/bar.js` is shown as not covered).

Will keep trying to crash it.
