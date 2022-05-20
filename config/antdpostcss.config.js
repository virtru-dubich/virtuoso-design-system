const postcssImport = require('postcss-import');
const modifyVars = require('../lib/styles/antd');

module.exports = {
  minimize: true,
  plugins: [postcssImport()],
  extensions: ['.less'],
  use: [['less', { javascriptEnabled: true, modifyVars }]],
  extract: true,
};
