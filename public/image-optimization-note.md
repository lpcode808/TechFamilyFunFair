# Image Optimization Note

The `hero-vr-girl.jpg` file in the assets directory is currently 340KB, which is quite large for a web page. This can significantly impact loading times, especially on mobile devices with slower connections.

## Optimization Tasks

1. **Compress the image** - Reduce file size while maintaining acceptable quality
2. **Resize to appropriate dimensions** - Max width of 1200px should be sufficient for most displays
3. **Convert to WebP format** - Provides better compression than JPEG with similar quality
4. **Create multiple sizes for responsive loading** - Use srcset for different device resolutions

## Recommended Tools

- **ImageMagick** - Command line tool for image manipulation
- **TinyPNG/TinyJPG** - Online service for efficient compression
- **Squoosh** - Browser-based image compression tool

## Example Commands

```bash
# Resize and compress with ImageMagick
convert hero-vr-girl.jpg -resize 1200x -quality 75 hero-vr-girl-optimized.jpg

# Create WebP version
cwebp -q 75 hero-vr-girl-optimized.jpg -o hero-vr-girl.webp

# Create responsive versions
convert hero-vr-girl.jpg -resize 800x -quality 75 hero-vr-girl-800.jpg
convert hero-vr-girl.jpg -resize 400x -quality 75 hero-vr-girl-400.jpg
```

## Implementation

After creating optimized versions, update the HTML to use them:

```html
<picture>
  <source srcset="/assets/hero-vr-girl.webp" type="image/webp">
  <source srcset="/assets/hero-vr-girl-optimized.jpg" type="image/jpeg"> 
  <img src="/assets/hero-vr-girl-optimized.jpg" alt="VR Experience">
</picture>
```

Or with responsive srcset:

```html
<img srcset="/assets/hero-vr-girl-400.jpg 400w,
             /assets/hero-vr-girl-800.jpg 800w,
             /assets/hero-vr-girl-optimized.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1200px) 800px,
            1200px"
     src="/assets/hero-vr-girl-optimized.jpg"
     alt="VR Experience">
``` 