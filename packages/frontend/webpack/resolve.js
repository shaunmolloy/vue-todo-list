const path = require('path');

module.exports = {
  // extensions: ['.js', '.vue', '.json', '.scss'],

  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@components': path.resolve(__dirname, '../src/js/components'),
    '@elements': path.resolve(__dirname, '../src/js/components/elements'),
    '@filters': path.resolve(__dirname, '../src/js/filters'),
    '@js': path.resolve(__dirname, '../src/js'),
    '@layouts': path.resolve(__dirname, '../src/js/components/layouts'),
    '@pages': path.resolve(__dirname, '../src/js/components/pages'),
    '@schema': path.resolve(__dirname, '../src/js/schema'),
    '@shared': path.resolve(__dirname, '../src/js/components/shared'),
    '@store': path.resolve(__dirname, '../src/js/store'),
    '@styles': path.resolve(__dirname, '../src/scss'),
    '@vendor': path.resolve(__dirname, '../src/js/vendor'),
  },
};
