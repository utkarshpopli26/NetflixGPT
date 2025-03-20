module.exports = function override(config, env) {
    config.output.publicPath = '/'; //Important line
    return config;
};