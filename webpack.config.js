const webpack = require('@nativescript/webpack');

module.exports = (env) => {
  webpack.init(env);

  // Add polyfills and fallbacks for Supabase
  webpack.chainWebpack((config) => {
    config.resolve.fallback = {
      "crypto": false,
      "stream": false,
      "http": false,
      "https": false,
      "zlib": false,
      "net": false,
      "tls": false,
      "url": false
    };
  });

  return webpack.resolveConfig();
};