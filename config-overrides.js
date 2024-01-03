module.exports = function override(config, env) {
  config.resolve = {
    ...config.resolve,
    fallback: {
      buffer: require.resolve("buffer/"),
      timers: require.resolve("timers-browserify"),
    },
  };
  return config;
};
