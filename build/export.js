// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
  'list': [
    'index.html',
    'config.js',
    'favicon.ico',
    'LICENSE',
    "jspm_packages/npm/bluebird@3.4.1/js/browser/bluebird.min.js", 
    'jspm_packages/system.js',
    'jspm_packages/system-polyfills.js',
    'jspm_packages/system-csp-production.js',
    'jspm_packages/npm/roboto-fontface@0.6.0/**',
    'jspm_packages/github/google/material-design-lite@1.2.1/**',
    'styles/**',
    'images/**'
  ],
  // this section lists any jspm packages that have
  // unbundled resources that need to be exported.
  // these files are in versioned folders and thus
  // must be 'normalized' by jspm to get the proper
  // path.
  'normalize': [
    [
      'bluebird', [
        '/js/browser/bluebird.min.js'
      ]
    ]
  ]
};
