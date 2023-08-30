const esbuild = require('esbuild');
const config = require('./esbuild.config.js');

esbuild.build(config).catch(() => process.exit(1));
