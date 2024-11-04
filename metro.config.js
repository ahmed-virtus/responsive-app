const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// Default configuration from Metro
const defaultConfig = getDefaultConfig(__dirname);

// Custom transformer configuration for SVG files
const svgTransformerConfig = {
    transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer')
    },
    resolver: {
        assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'), // Remove 'svg' from asset extensions
        sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'] // Add 'svg' to source extensions
    }
};

// Merge the default configuration with the SVG transformer configuration
module.exports = mergeConfig(defaultConfig, svgTransformerConfig);
