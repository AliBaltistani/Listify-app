const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const monorepoRoot = path.resolve(__dirname, '../..');
const config = getDefaultConfig(__dirname);

// Watch the shared package source for hot-reloading
config.watchFolders = [
    path.resolve(monorepoRoot, 'packages', 'shared'),
];

// Resolve modules: local node_modules first (has metro + expo),
// then monorepo root node_modules (has shared workspace packages)
config.resolver.nodeModulesPaths = [
    path.resolve(__dirname, 'node_modules'),
    path.resolve(monorepoRoot, 'node_modules'),
];

module.exports = config;
