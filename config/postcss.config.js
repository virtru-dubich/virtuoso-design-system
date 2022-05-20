// const path = require('path');
// const postcssHexRgba = require('postcss-hexrgba');
const postcssImport = require('postcss-import');
// const postcssCustomProperties = require('postcss-custom-properties');
// const postcssCustomMedia = require('postcss-custom-media');
const modifyVars = require('../lib/styles/antd');

module.exports = {
  autoModules: false,
  modules: { generateScopedName: '[hash:base64]' },
  plugins: [postcssImport()],
  extensions: ['.css', '.scss', '.less'],
  use: [
    // ['css', { javascriptEnabled: true, modifyVars }],
    ['less', { javascriptEnabled: true, modifyVars }],
  ],
  extract: true,
};
