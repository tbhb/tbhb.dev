module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        // Allow external stylesheets - inlining all CSS isn't practical
        // and the CSS is small (~5KB gzipped)
        'render-blocking-resources': ['warn', { maxLength: 1 }],
        'render-blocking-insight': ['warn', { maxLength: 1 }],
        // Network dependency tree insight scores 0 when there are any
        // critical request chains, which is normal for sites with
        // external stylesheets. Disable this check.
        'network-dependency-tree-insight': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
