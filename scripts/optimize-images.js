const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...');
  
  // Create optimized directory if it doesn't exist
  const optimizedDir = path.join(__dirname, '../public/images/optimized');
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }
  
  try {
    // Optimize JPEG images
    console.log('📸 Optimizing JPEG images...');
    await imagemin(['public/images/*.jpg'], {
      destination: 'public/images/optimized',
      plugins: [
        imageminMozjpeg({
          quality: 85,
          progressive: true
        })
      ]
    });
    
    // Optimize PNG images
    console.log('🎨 Optimizing PNG images...');
    await imagemin(['public/images/*.png'], {
      destination: 'public/images/optimized',
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8]
        })
      ]
    });
    
    // Convert to WebP
    console.log('🚀 Converting to WebP format...');
    await imagemin(['public/images/*.{jpg,png}'], {
      destination: 'public/images/optimized',
      plugins: [
        imageminWebp({
          quality: 80
        })
      ]
    });
    
    console.log('✅ Image optimization complete!');
    console.log('📊 Check public/images/optimized/ for optimized files');
    
    // Display file size comparison
    const originalDir = 'public/images';
    const optimizedDir = 'public/images/optimized';
    
    console.log('\n📏 File size comparison:');
    const originalFiles = fs.readdirSync(originalDir).filter(f => f.match(/\.(jpg|png)$/));
    
    let totalOriginal = 0;
    let totalOptimized = 0;
    
    originalFiles.forEach(file => {
      const originalPath = path.join(originalDir, file);
      const optimizedPath = path.join(optimizedDir, file);
      const webpPath = path.join(optimizedDir, file.replace(/\.(jpg|png)$/, '.webp'));
      
      if (fs.existsSync(originalPath)) {
        const originalSize = fs.statSync(originalPath).size;
        totalOriginal += originalSize;
        
        if (fs.existsSync(optimizedPath)) {
          const optimizedSize = fs.statSync(optimizedPath).size;
          totalOptimized += optimizedSize;
          const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
          console.log(`${file}: ${(originalSize/1024).toFixed(1)}KB → ${(optimizedSize/1024).toFixed(1)}KB (${savings}% smaller)`);
        }
        
        if (fs.existsSync(webpPath)) {
          const webpSize = fs.statSync(webpPath).size;
          const webpSavings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
          console.log(`${file} → WebP: ${(originalSize/1024).toFixed(1)}KB → ${(webpSize/1024).toFixed(1)}KB (${webpSavings}% smaller)`);
        }
      }
    });
    
    const totalSavings = ((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1);
    console.log(`\n💾 Total savings: ${(totalOriginal/1024).toFixed(1)}KB → ${(totalOptimized/1024).toFixed(1)}KB (${totalSavings}% reduction)`);
    
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

optimizeImages();
