'use strict';

var wallabyWebpack = require('wallaby-webpack');
var webpackPostprocessor = wallabyWebpack({});

module.exports = function (wallaby) {

  return {
    files: [
      { pattern: 'node_modules/babel-polyfill/browser.js', instrument: false},
      { pattern: 'src/**/*.js', load: false }
    ],

    tests: [
      { pattern: 'tests/**/*.spec.js', load: false }
    ],

    testFramework: "mocha",

    env: {
      runner: require('phantomjs-prebuilt').path
    },
    
    compilers: {
      '**/*.js': wallaby.compilers.babel({
        presets: ['es2015', 'react']
      })
    },

    postprocessor: webpackPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    }
  };
};