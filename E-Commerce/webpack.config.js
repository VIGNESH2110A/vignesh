const path = require('path');

module.exports = {
  // ... other webpack configurations
  
  resolve: {
    fallback: {
      os: require.resolve('os-browserify/browser')
    }
  }
};