# Images Directory

This directory contains all images used in the website.

## Folder Structure

```
public/images/
├── social-work/          # Social work activity images
└── leaders/              # Political leader images (optional)
```

## Adding Images

### Social Work Images
Place images in `public/images/social-work/` folder. See `social-work/README.md` for naming conventions.

### Leader Images
If you want to add actual leader photos, place them in `public/images/leaders/` and update `src/data/partyData.json`.

## Image Paths in Code

Images in the `public` folder are served from the root:
- `/images/social-work/01-water-filter.jpg` → `public/images/social-work/01-water-filter.jpg`

## Best Practices

1. **Optimize Images**: Compress before adding to reduce load times
2. **Consistent Naming**: Follow the naming conventions
3. **File Formats**: Use JPG for photos, PNG for graphics, WebP for best compression
4. **File Sizes**: Keep images under 500KB each
5. **Dimensions**: Recommended 800x600px (4:3 ratio) for social work images

## Image Optimization Tools

- [TinyPNG](https://tinypng.com/) - Online image compression
- [ImageOptim](https://imageoptim.com/) - Desktop tool for Mac
- [Squoosh](https://squoosh.app/) - Google's image optimization tool


