const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const path = require('path')
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const getPath = (...components) =>
  path.resolve(path.join(__dirname, ...components))

const modules = {
  src: getPath('src'),
}
const config = {
  resolver: {
    extraNodeModules: modules,
  },
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
