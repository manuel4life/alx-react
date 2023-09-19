const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirtname, './js/dashboard_main.js'),
  },
  output: {
    path: path.resolve(__dirtname, 'public'),
    filename: 'bundle.js',
  },
};
