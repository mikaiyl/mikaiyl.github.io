#!/usr/bin/env node

/**
 * Simple deployment verification script
 * This script can be used to verify that the built site is properly structured
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const DIST_DIR = 'dist';
const REQUIRED_FILES = ['index.html'];
const REQUIRED_DIRS = ['assets'];

console.log('🔍 Verifying deployment build...');

// Check if dist directory exists
if (!existsSync(DIST_DIR)) {
  console.error('❌ Error: dist directory not found');
  process.exit(1);
}

// Check required files
for (const file of REQUIRED_FILES) {
  const filePath = join(DIST_DIR, file);
  if (!existsSync(filePath)) {
    console.error(`❌ Error: Required file ${file} not found in dist/`);
    process.exit(1);
  }
  console.log(`✅ Found: ${file}`);
}

// Check required directories
for (const dir of REQUIRED_DIRS) {
  const dirPath = join(DIST_DIR, dir);
  if (!existsSync(dirPath)) {
    console.error(`❌ Error: Required directory ${dir} not found in dist/`);
    process.exit(1);
  }
  console.log(`✅ Found: ${dir}/`);
}

// Verify HTML content
try {
  const htmlContent = readFileSync(join(DIST_DIR, 'index.html'), 'utf-8');
  
  // Check for essential HTML structure
  const checks = [
    { test: /<html[^>]*lang="en"/, name: 'HTML lang attribute' },
    { test: /<title>/, name: 'Title tag' },
    { test: /<meta[^>]*charset="UTF-8"/, name: 'Charset meta tag' },
    { test: /<meta[^>]*viewport/, name: 'Viewport meta tag' },
    { test: /<h1>/, name: 'Main heading (h1)' },
    { test: /assets\/.*\.css/, name: 'CSS asset reference' }
  ];
  
  for (const check of checks) {
    if (check.test.test(htmlContent)) {
      console.log(`✅ HTML check passed: ${check.name}`);
    } else {
      console.warn(`⚠️  HTML check failed: ${check.name}`);
    }
  }
  
} catch (error) {
  console.error('❌ Error reading HTML file:', error.message);
  process.exit(1);
}

console.log('\n🎉 Deployment verification completed successfully!');
console.log('📝 Your site is ready for GitHub Pages deployment.');