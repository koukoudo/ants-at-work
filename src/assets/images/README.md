# Image Management Guide

This directory contains all the images used in the Ants At Work website, organized for easy updates.

## Directory Structure

```
src/assets/images/
├── logos.ts                 # Header and footer logos
├── clientLogos.ts           # Client logos for the scrolling section
├── servicesImages.ts        # Services card images
├── galleryImages.ts         # Gallery images for the portfolio section
├── client-logos/            # Place your client logo images here
├── services/                # Place your services images here
├── gallery/                 # Place your gallery images here
└── README.md               # This file
```

## How to Update Images

### 1. Client Logos (Scrolling Section)

**Location:** `src/assets/images/clientLogos.ts`

**Steps:**
1. Add your client logo images to `src/assets/images/client-logos/`
2. Import them in `clientLogos.ts`:
   ```typescript
   import clientLogo1 from './client-logos/your-logo-1.png';
   ```
3. Replace the URLs in the `clientLogos` array with your imports
4. **Recommended format:** PNG with transparent background
5. **Recommended size:** 191x127px (or similar aspect ratio)

### 2. Services Card Images

**Location:** `src/assets/images/servicesImages.ts`

**Steps:**
1. Add your services images to `src/assets/images/services/`
2. Import them in `servicesImages.ts`:
   ```typescript
   import buildingImage from './services/building.jpg';
   ```
3. Replace the URLs in the `servicesImages` object with your imports
4. **Recommended format:** JPG or PNG
5. **Recommended size:** 414x351px (or similar aspect ratio)

### 3. Gallery Images

**Location:** `src/assets/images/galleryImages.ts`

**Steps:**
1. Add your gallery images to `src/assets/images/gallery/`
2. Import them in `galleryImages.ts`:
   ```typescript
   import gallery1 from './gallery/gallery1.jpg';
   ```
3. Replace the URLs in the `galleryImages` array with your imports
4. Update titles, heights, and categories as needed
5. **Recommended format:** JPG or PNG
6. **Recommended size:** Various heights (250px to 600px) for masonry layout
7. **Categories:** Commercial, Residential, Industrial (or create your own)

### 4. Header/Footer Logos

**Location:** `src/assets/images/logos.ts`

**Steps:**
1. Add your logo images to `src/assets/images/`
2. Import them in `logos.ts`
3. Update the `headerLogo` and `footerLogo` exports

## Image Requirements

### Client Logos
- **Format:** PNG with transparent background preferred
- **Size:** 191x127px (or similar aspect ratio)
- **Quality:** High resolution, clear and professional
- **Background:** Transparent or white background

### Services Images
- **Format:** JPG or PNG
- **Size:** 414x351px (or similar aspect ratio)
- **Quality:** High resolution, professional construction/renovation photos
- **Content:** Should clearly represent each service (building, shopfitting, renovations, removals)

### Gallery Images
- **Format:** JPG or PNG
- **Size:** Various heights (250px to 600px) for masonry layout
- **Quality:** High resolution, professional project photos
- **Content:** Should showcase your best work across different categories
- **Categories:** Commercial, Residential, Industrial (or customize as needed)

### General Tips
- Use descriptive filenames
- Optimize images for web (compress without losing quality)
- Test images on different screen sizes
- Ensure images are properly licensed for commercial use
