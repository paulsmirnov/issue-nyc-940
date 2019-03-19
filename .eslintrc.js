const os = require('os');

module.exports = {
  root: true,
  extends: 'airbnb-base',
  parser: 'babel-eslint',

  rules: {
    'linebreak-style': ['warn', os.EOL === '\n'? 'unix' : 'windows'],
  },

  overrides: [{
    files: ['src/**/*.test.js', 'test/**/*.js'],
    env: {
      mocha: true,
    },
  }],
};
