const fs = require('fs');
const path = require('path');

async function analyzeImages() {
  console.log('🖼️  Analyzing current images...');
  
  const imagesDir = 'public/images';
  const files = fs.readdirSync(imagesDir).filter(f => f.match(/\.(jpg|png|jpeg)$/));
  
  console.log('\n📊 Current image sizes:');
  let totalSize = 0;
  
  files.forEach(file => {
    const filePath = path.join(imagesDir, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(1);
    totalSize += stats.size;
    
    let recommendation = '';
    if (stats.size > 100000) recommendation = ' ⚠️  HIGH IMPACT - Needs optimization';
    else if (stats.size > 50000) recommendation = ' ⚠️  MEDIUM IMPACT - Should optimize';
    else recommendation = ' ✅ Good size';
    
    console.log(`${file}: ${sizeKB} KB${recommendation}`);
  });
  
  const totalKB = (totalSize / 1024).toFixed(1);
  console.log(`\n💾 Total images size: ${totalKB} KB`);
  
  console.log('\n🎯 Optimization recommendations:');
  console.log('1. Use online tools like TinyPNG.com or Squoosh.app');
  console.log('2. Target sizes: profile.jpg < 30KB, others < 25KB');
  console.log('3. Convert to WebP format for 50-80% size reduction');
  console.log('4. Use progressive JPEG for better perceived loading');
  
  console.log('\n📋 Manual optimization steps:');
  console.log('1. Visit https://tinypng.com');
  console.log('2. Upload each image individually');
  console.log('3. Download optimized versions');
  console.log('4. Replace original files in public/images/');
  
  return { files, totalSize };
}

analyzeImages();
