#!/usr/bin/env node

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');

async function runMobilePerformanceTest() {
  console.log('📱 Starting mobile performance test...');
  
  const chrome = await chromeLauncher.launch({
    chromeFlags: [
      '--headless',
      '--disable-gpu',
      '--no-sandbox',
      '--disable-dev-shm-usage'
    ]
  });

  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance', 'best-practices'],
    port: chrome.port,
    formFactor: 'mobile',
    throttling: {
      rttMs: 150,
      throughputKbps: 1638.4,
      cpuSlowdownMultiplier: 4
    }
  };

  try {
    console.log('🔍 Running Lighthouse audit...');
    const runnerResult = await lighthouse('http://localhost:3000', options);
    
    // Save HTML report
    const reportHtml = runnerResult.report;
    fs.writeFileSync('./mobile-performance-report.html', reportHtml);
    
    // Extract key metrics
    const scores = runnerResult.lhr.categories;
    const audits = runnerResult.lhr.audits;
    
    console.log('\n📊 Mobile Performance Results:');
    console.log('================================');
    console.log(`Performance Score: ${Math.round(scores.performance.score * 100)}/100`);
    console.log(`Best Practices Score: ${Math.round(scores['best-practices'].score * 100)}/100`);
    
    console.log('\n⚡ Core Web Vitals:');
    console.log(`First Contentful Paint: ${audits['first-contentful-paint'].displayValue}`);
    console.log(`Largest Contentful Paint: ${audits['largest-contentful-paint'].displayValue}`);
    console.log(`Total Blocking Time: ${audits['total-blocking-time'].displayValue}`);
    console.log(`Cumulative Layout Shift: ${audits['cumulative-layout-shift'].displayValue}`);
    
    console.log('\n🖼️  Image Opportunities:');
    if (audits['uses-webp-images']) {
      console.log(`WebP Images: ${audits['uses-webp-images'].displayValue || 'Check needed'}`);
    }
    if (audits['uses-optimized-images']) {
      console.log(`Optimized Images: ${audits['uses-optimized-images'].displayValue || 'Check needed'}`);
    }
    
    console.log('\n📱 Mobile-Specific Issues:');
    if (audits['uses-responsive-images']) {
      console.log(`Responsive Images: ${audits['uses-responsive-images'].displayValue || 'Check needed'}`);
    }
    if (audits['total-byte-weight']) {
      console.log(`Total Byte Weight: ${audits['total-byte-weight'].displayValue}`);
    }
    
    console.log(`\n📄 Full report saved to: mobile-performance-report.html`);
    
  } catch (error) {
    console.error('❌ Error running performance test:', error.message);
  } finally {
    await chrome.kill();
  }
}

// Check if server is running
console.log('🚀 Make sure your dev server is running on http://localhost:3000');
console.log('📋 Run: npm run dev (in another terminal)');
console.log('⏳ Starting test in 3 seconds...\n');

setTimeout(runMobilePerformanceTest, 3000);
