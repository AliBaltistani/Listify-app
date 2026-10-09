/**
 * Listify Monorepo — Post-Install Setup Script
 *
 * This script runs automatically after every `npm install` at the monorepo root.
 * It installs the mobile app's dependencies locally (not hoisted) so that
 * Metro bundler and all Expo sub-packages are available in apps/mobile/node_modules.
 *
 * Why is this needed?
 * npm workspaces hoists all packages to the root node_modules by default.
 * React Native / Expo requires Metro and its dependencies to be in the LOCAL
 * node_modules of the app — not in the workspace root. This script ensures that.
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const MOBILE_DIR = path.join(__dirname, '..', 'apps', 'mobile');

// Skip in CI environments that handle their own installs
if (process.env.CI) {
    console.log('CI environment detected — skipping mobile postinstall');
    process.exit(0);
}

// Skip if we're already inside an apps/mobile install (prevents infinite loop)
if (process.env.LISTIFY_MOBILE_INSTALL === '1') {
    process.exit(0);
}

if (!fs.existsSync(MOBILE_DIR)) {
    console.warn('⚠️  apps/mobile not found — skipping mobile install');
    process.exit(0);
}

console.log('\n📱 Installing mobile app dependencies locally (metro + expo)...');

try {
    execSync('npm install --legacy-peer-deps --loglevel=error', {
        cwd: MOBILE_DIR,
        stdio: 'inherit',
        env: {
            ...process.env,
            // Signal that we're inside the mobile install to prevent loops
            LISTIFY_MOBILE_INSTALL: '1',
            // Unset npm workspace config so this runs as standalone
            npm_config_workspaces: '',
        },
    });
    console.log('✅ Mobile app dependencies installed successfully\n');
} catch (err) {
    console.error('❌ Failed to install mobile app dependencies:', err.message);
    process.exit(1);
}
