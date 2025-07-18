#!/usr/bin/env node

/**
 * Basic accessibility validation script for the resume site
 * Checks for common accessibility issues and best practices
 */

import { readFileSync } from 'fs';
import { join } from 'path';

const htmlContent = readFileSync(join(process.cwd(), 'dist/index.html'), 'utf-8');

console.log('🔍 Running Accessibility Validation...\n');

const checks = [
    {
        name: 'HTML lang attribute',
        test: () => htmlContent.includes('<html lang="en">'),
        description: 'HTML document has language attribute'
    },
    {
        name: 'Skip navigation link',
        test: () => htmlContent.includes('Skip to main content'),
        description: 'Skip navigation link present for screen readers'
    },
    {
        name: 'Main landmark',
        test: () => htmlContent.includes('role="main"') && htmlContent.includes('id="main-content"'),
        description: 'Main content landmark properly identified'
    },
    {
        name: 'Heading hierarchy',
        test: () => {
            const h1Count = (htmlContent.match(/<h1/g) || []).length;
            const hasH2 = htmlContent.includes('<h2');
            const hasH3 = htmlContent.includes('<h3');
            return h1Count === 1 && hasH2 && hasH3;
        },
        description: 'Proper heading hierarchy (single h1, with h2 and h3)'
    },
    {
        name: 'ARIA labels',
        test: () => htmlContent.includes('aria-label=') && htmlContent.includes('aria-labelledby='),
        description: 'ARIA labels and labelledby attributes present'
    },
    {
        name: 'Semantic lists',
        test: () => htmlContent.includes('role="list"'),
        description: 'Lists properly marked with semantic roles'
    },
    {
        name: 'Contact links accessibility',
        test: () => {
            const hasPhoneLabel = htmlContent.includes('aria-label="Phone number"');
            const hasEmailLabel = htmlContent.includes('aria-label="Email address"');
            return hasPhoneLabel && hasEmailLabel;
        },
        description: 'Contact links have proper ARIA labels'
    },
    {
        name: 'Screen reader content',
        test: () => htmlContent.includes('sr-only'),
        description: 'Screen reader only content properly hidden'
    },
    {
        name: 'Semantic time elements',
        test: () => htmlContent.includes('<time') && htmlContent.includes('datetime='),
        description: 'Time elements use semantic markup with datetime attributes'
    },
    {
        name: 'Article structure',
        test: () => htmlContent.includes('role="article"'),
        description: 'Content sections properly structured as articles'
    }
];

let passedChecks = 0;
let totalChecks = checks.length;

checks.forEach(check => {
    const passed = check.test();
    const status = passed ? '✅' : '❌';
    console.log(`${status} ${check.name}: ${check.description}`);
    if (passed) passedChecks++;
});

console.log(`\n📊 Accessibility Score: ${passedChecks}/${totalChecks} (${Math.round((passedChecks / totalChecks) * 100)}%)`);

if (passedChecks === totalChecks) {
    console.log('🎉 All accessibility checks passed!');
    process.exit(0);
} else {
    console.log('⚠️  Some accessibility improvements needed.');
    process.exit(1);
}