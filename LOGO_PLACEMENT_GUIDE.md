# Logo Placement Guide for Soukhyaa Website

## Directory Structure for Logos

Place your logo images in the following directories:

```
/public/
├── logos/                    # Main logo directory
│   ├── soukhyaa-logo.png    # Main company logo
│   ├── soukhyaa-logo.svg    # Vector version (recommended)
│   ├── logo-white.png       # White version for dark backgrounds
│   ├── logo-dark.png        # Dark version for light backgrounds
│   └── favicon.ico          # Website favicon
├── assets/                   # Additional brand assets
│   ├── brand-guidelines.pdf # Brand guidelines document
│   └── color-palette.png    # Brand color reference
└── images/                   # Product images (already created)
    ├── doctor-coat.jpg
    ├── nursing-scrubs.jpg
    └── ...
```

## Logo Specifications

### Main Logo
- **File**: `soukhyaa-logo.png` or `soukhyaa-logo.svg`
- **Format**: PNG (with transparency) or SVG (recommended)
- **Dimensions**: 
  - Minimum: 200x60px
  - Recommended: 400x120px
  - Maximum: 800x240px
- **Background**: Transparent
- **Usage**: Navigation bar, footer, main branding

### White Logo
- **File**: `logo-white.png`
- **Format**: PNG with transparency
- **Color**: White (#FFFFFF)
- **Usage**: Dark backgrounds, hero section overlay

### Dark Logo
- **File**: `logo-dark.png`
- **Format**: PNG with transparency
- **Color**: Dark (#1F2937 or brand dark color)
- **Usage**: Light backgrounds, footer

### Favicon
- **File**: `favicon.ico`
- **Format**: ICO
- **Dimensions**: 16x16, 32x32, 48x48px
- **Usage**: Browser tab icon

## Where Logos Will Be Used

### 1. Navigation Bar
- **Location**: Top-left corner of the website
- **File**: `soukhyaa-logo.png` or `soukhyaa-logo.svg`
- **Size**: 120x36px (responsive)

### 2. Hero Section
- **Location**: Can be added as overlay on hero background
- **File**: `logo-white.png` (for dark hero background)
- **Size**: 200x60px

### 3. Footer
- **Location**: Footer branding area
- **File**: `soukhyaa-logo.png` or `logo-dark.png`
- **Size**: 150x45px

### 4. About Section
- **Location**: Company information area
- **File**: `soukhyaa-logo.png`
- **Size**: 180x54px

### 5. Contact Section
- **Location**: Contact form header
- **File**: `soukhyaa-logo.png`
- **Size**: 160x48px

## How to Add Your Logos

### Step 1: Prepare Your Logo Files
1. Create different versions of your logo:
   - Main logo (PNG/SVG)
   - White version for dark backgrounds
   - Dark version for light backgrounds
   - Favicon (ICO format)

### Step 2: Upload to Correct Directories
```
Copy your files to:
/public/logos/soukhyaa-logo.png
/public/logos/logo-white.png
/public/logos/logo-dark.png
/public/logos/favicon.ico
```

### Step 3: Update the Code (I'll help you with this)
The website code will need to be updated to use your actual logo files instead of the text-based logo.

## Logo Integration Points

### Navigation Component
- **File**: `src/components/Navigation.tsx`
- **Current**: Text-based "Soukhyaa" logo
- **Will be updated to**: Image-based logo

### Footer Component
- **File**: `src/components/Footer.tsx`
- **Current**: Text-based "Soukhyaa" logo
- **Will be updated to**: Image-based logo

### Hero Section
- **File**: `src/components/HeroSection.tsx`
- **Can add**: Logo overlay on hero background

## Logo Best Practices

### Design Guidelines
1. **Consistency**: Use the same logo across all touchpoints
2. **Scalability**: Ensure logo looks good at different sizes
3. **Readability**: Logo should be clear and readable
4. **Brand Colors**: Maintain brand color consistency

### Technical Guidelines
1. **File Formats**: 
   - SVG for scalability (recommended)
   - PNG for complex designs
   - ICO for favicon
2. **File Sizes**: Keep under 100KB for web performance
3. **Transparency**: Use transparent backgrounds
4. **Responsive**: Ensure logo works on all screen sizes

## Quick Setup Instructions

1. **Create your logo files** in the specified formats
2. **Copy them to** `/public/logos/` directory
3. **Let me know** when you've added them
4. **I'll update the code** to use your actual logos

## Example File Structure After Adding Logos

```
/public/
├── logos/
│   ├── soukhyaa-logo.svg     ← Your main logo
│   ├── logo-white.png        ← White version
│   ├── logo-dark.png         ← Dark version
│   └── favicon.ico           ← Website icon
├── assets/
│   └── (any additional brand assets)
└── images/
    └── (product images)
```

## Need Help?

Once you've placed your logo files in the correct directories, I can help you:
- Update the navigation to use your logo
- Add logo to the footer
- Integrate logo in the hero section
- Set up the favicon
- Ensure responsive logo display

Just let me know when you've added your logo files and I'll integrate them into the website!
