#!/usr/bin/env node

/**
 * Netlify Build Script
 * 
 * This script runs the build process for the public-pages site.
 * It executes TypeScript compilation and Vite build, then outputs to dist/
 * 
 * Usage: node netlify-build.js
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logStep(step) {
  log(`\n${step}`, 'blue');
}

function logSuccess(message) {
  log(`✅ ${message}`, 'green');
}

function logError(message) {
  log(`❌ ${message}`, 'red');
}

function logWarning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

try {
  logStep('🚀 Starting Netlify build process...');
  
  // Check if node_modules exists
  // Note: Netlify runs npm install automatically before this script
  // The .npmrc file handles legacy-peer-deps for react-helmet-async compatibility
  const nodeModulesPath = join(__dirname, 'node_modules');
  if (!existsSync(nodeModulesPath)) {
    logWarning('node_modules not found. Installing dependencies...');
    logStep('Running: npm install');
    logWarning('Note: .npmrc is configured with legacy-peer-deps=true');
    execSync('npm install', { 
      stdio: 'inherit',
      cwd: __dirname 
    });
    logSuccess('Dependencies installed');
  }

  // Run TypeScript compilation and Vite build
  logStep('Running build command: npm run build');
  log('This will run: tsc -b && vite build');
  
  execSync('npm run build', {
    stdio: 'inherit',
    cwd: __dirname,
    env: {
      ...process.env,
      NODE_ENV: 'production',
    },
  });

  // Verify dist directory exists
  const distPath = join(__dirname, 'dist');
  if (!existsSync(distPath)) {
    throw new Error('Build failed: dist/ directory was not created');
  }

  logSuccess('Build completed successfully!');
  logStep(`📦 Build output: ${distPath}`);
  
  // List some key files to verify build
  const keyFiles = ['index.html'];
  const missingFiles = keyFiles.filter(file => !existsSync(join(distPath, file)));
  
  if (missingFiles.length > 0) {
    logWarning(`Some expected files are missing: ${missingFiles.join(', ')}`);
  } else {
    logSuccess('All expected build files are present');
  }

  log('\n✨ Build process completed successfully!', 'green');
  process.exit(0);

} catch (error) {
  logError('Build failed!');
  console.error(error.message);
  
  if (error.stdout) {
    console.error('STDOUT:', error.stdout.toString());
  }
  if (error.stderr) {
    console.error('STDERR:', error.stderr.toString());
  }
  
  process.exit(1);
}
