// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Hỗ trợ thêm .ttf vào asset extensions
config.resolver.assetExts.push('ttf');

// Xử lý riêng SVG
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

// Đảm bảo không gán assetPlugins thủ công (vì sẽ lỗi fonts)

module.exports = config;
