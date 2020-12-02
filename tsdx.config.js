const postcss = require('rollup-plugin-postcss')
const graphql = require('rollup-plugin-graphql')

module.exports = {
  rollup(config) {
    config.plugins.push(
      postcss({
        modules: true,
      }),
      graphql()
    )

    return config
  },
}
