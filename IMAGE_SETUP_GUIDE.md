# Image Setup Guide

## Quick Start

1. **Place your images** in `public/images/social-work/` folder
2. **Name them** according to the mapping (see below)
3. **Refresh** your browser - images will appear automatically!

## Image Naming

Use these exact filenames (case-sensitive):

```
01-water-filter.jpg
02-street-light.jpg
03-water-problem.jpg
04-valve-relocation.jpg
05-road-repair.jpg
06-drainage.jpg
07-electricity.jpg
08-light-pole.jpg
09-road-cleaning.jpg
10-voter-registration.jpg
11-tree-cutting.jpg
12-obc-bjp.jpg
13-flood-relief.jpg
14-road-gravelling-1.jpg
15-road-gravelling-2.jpg
16-temple-cleaning.jpg
17-welcome-signboard.jpg
18-bench-distribution.jpg
19-ganesh-utsav.jpg
20-navratri.jpg
21-orphanage.jpg
22-covid-center.jpg
23-dengue-fogging.jpg
24-sanitization.jpg
25-water-pipeline.jpg
26-covid-food.jpg
27-road-construction.jpg
```

## Image Requirements

- **Format**: `.jpg`, `.png`, or `.webp`
- **Size**: 800x600 pixels (or similar 4:3 ratio)
- **File Size**: Under 500KB each (optimize before adding)
- **Quality**: Clear, well-lit photos

## Step-by-Step Instructions

### Option 1: Using File Explorer

1. Open `E:\campaign\public\images\social-work\` folder
2. Copy your image files into this folder
3. Rename them to match the list above
4. Refresh your browser

### Option 2: Using Command Line

```bash
# Navigate to the images folder
cd public/images/social-work

# Copy your images here and rename them
# Example: copy "DSC001.jpg" "01-water-filter.jpg"
```

## Image Optimization

Before adding images, optimize them:

1. **Online Tools**:
   - [TinyPNG](https://tinypng.com/) - Drag and drop
   - [Squoosh](https://squoosh.app/) - Google's tool

2. **Desktop Tools**:
   - ImageOptim (Mac)
   - GIMP (Free, all platforms)

3. **Quick Tips**:
   - Use JPG for photos (smaller file size)
   - Use PNG only if you need transparency
   - WebP format gives best compression

## Testing

After adding images:

1. Make sure dev server is running: `npm run dev`
2. Open browser: `http://localhost:5173`
3. Scroll to "Social Work & Contributions" section
4. Verify images appear below each activity
5. Check on mobile view (responsive design)

## Troubleshooting

### Image Not Showing?

1. **Check filename**: Must match exactly (case-sensitive)
2. **Check location**: Must be in `public/images/social-work/`
3. **Check format**: Use `.jpg`, `.png`, or `.webp`
4. **Clear browser cache**: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
5. **Check browser console**: F12 → Console tab for errors

### Image Too Large?

- Use an image optimizer (TinyPNG recommended)
- Resize to 800x600px before adding
- Compress to under 500KB

### Wrong Image for Activity?

- Check `IMAGE_MAPPING.txt` in the `social-work` folder
- Verify the filename matches the activity index
- Update `src/data/candidateData.json` if needed

## Adding New Activities

If you add new activities:

1. Add activity text to `src/data/translations.json`
2. Add image entry to `src/data/candidateData.json`:
   ```json
   {
     "activityIndex": 27,
     "image": "/images/social-work/28-new-activity.jpg",
     "alt": "New Activity Description"
   }
   ```
3. Add the image file to `public/images/social-work/`

## Need Help?

- Check `public/images/social-work/README.md` for detailed info
- Review `IMAGE_MAPPING.txt` for activity-to-image mapping
- All image paths are configured in `src/data/candidateData.json`


