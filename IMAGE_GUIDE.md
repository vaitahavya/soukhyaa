# Image Integration Guide for Soukhyaa Website

## Overview
The website has been enhanced with an image-based design that showcases your hospital uniform products. Currently, placeholder images are being used, but you can easily replace them with actual product photos.

## Image Requirements

### Product Images
Replace the following placeholder images in `/public/images/` with actual product photos:

1. **doctor-coat.jpg** - Doctor coats and medical jackets
2. **nursing-scrubs.jpg** - Nursing scrubs and uniforms
3. **lab-coat.jpg** - Laboratory coats and technician wear
4. **support-uniform.jpg** - Support staff uniforms
5. **custom-uniform.jpg** - Customized uniforms with branding
6. **specialized-wear.jpg** - Specialized medical wear

### Image Specifications
- **Format**: JPG or PNG
- **Dimensions**: 400x300px (4:3 aspect ratio)
- **File Size**: Under 200KB for optimal performance
- **Quality**: High resolution, professional photography
- **Style**: Clean, well-lit, professional appearance

## Recommended Image Types

### Product Photography
- **Studio shots** of individual uniform pieces
- **Lifestyle photos** of healthcare professionals wearing uniforms
- **Detail shots** showing fabric quality and features
- **Multiple angles** for comprehensive product views

### Lifestyle Photography
- **Healthcare professionals** in action (consulting, caring, working)
- **Hospital/clinic environments** showing uniforms in context
- **Team photos** showing different uniform types together
- **Professional settings** that highlight the quality and professionalism

## Image Optimization Tips

### For Web Performance
1. **Compress images** before uploading (use tools like TinyPNG or ImageOptim)
2. **Use appropriate formats** (JPG for photos, PNG for graphics with transparency)
3. **Optimize file sizes** while maintaining quality
4. **Consider responsive images** for different screen sizes

### For SEO
1. **Use descriptive filenames** (e.g., `premium-doctor-coat-blue.jpg`)
2. **Add alt text** (already implemented in the code)
3. **Include relevant keywords** in image names

## How to Replace Images

### Step 1: Prepare Your Images
1. Take or source high-quality photos of your products
2. Edit and optimize them according to the specifications above
3. Name them according to the list above

### Step 2: Upload Images
1. Navigate to `/public/images/` directory
2. Replace the placeholder files with your actual images
3. Keep the same filenames for automatic integration

### Step 3: Test the Website
1. Run the development server: `bun run dev`
2. Check that all images load correctly
3. Verify the layout looks good on different screen sizes

## Additional Image Opportunities

### Hero Section
- Add a large hero image showing healthcare professionals
- Consider a video background for more dynamic presentation

### About Section
- Add team photos or company facility images
- Include manufacturing or quality control process photos

### Testimonials
- Add actual photos of customers (with permission)
- Include hospital/clinic logos or facility photos

### Industries Section
- Add photos of different healthcare settings
- Show uniforms in various medical departments

## Professional Photography Tips

### Product Shots
- Use consistent lighting and backgrounds
- Show multiple angles and details
- Include size references or models when possible
- Maintain consistent styling across all products

### Lifestyle Shots
- Capture authentic moments in healthcare settings
- Show diversity in healthcare professionals
- Ensure proper permissions and releases
- Focus on comfort, professionalism, and quality

## Technical Implementation

The website uses Next.js Image component for optimal performance:
- Automatic image optimization
- Responsive image loading
- Lazy loading for better performance
- WebP format support when available

## Support

If you need help with image integration or optimization, the current setup makes it easy to:
- Replace placeholder images with real photos
- Add new product categories
- Update lifestyle and testimonial images
- Optimize for different screen sizes

The image-based design will significantly enhance the visual appeal and professionalism of your website, better showcasing the quality of Soukhyaa's hospital uniforms.
