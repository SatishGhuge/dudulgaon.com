# 📸 Where to Upload Images - Complete Guide

## Quick Reference

```
E:\campaign\public\images\
├── social-work\          ← Social work activity photos (27 images)
├── leaders\              ← Political leader photos (6+ images)
└── candidates\           ← Candidate & spouse photos (2 images)
```

---

## 📁 Location 1: Social Work Images

**Folder Path:**
```
E:\campaign\public\images\social-work\
```

**What to upload:**
- Photos of social work activities
- 27 images total (one for each activity)

**File Names:**
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

**Image Specs:**
- Size: 800x600 pixels (4:3 ratio)
- Format: JPG, PNG, or WebP
- File Size: Under 500KB each

**See:** `public/images/social-work/IMAGE_MAPPING.txt` for full details

---

## 📁 Location 2: Candidate Photos

**Folder Path:**
```
E:\campaign\public\images\candidates\
```

**What to upload:**
- Candidate photo (Smt. Kaveri Sachin Talekar)
- Spouse photo (Shri. Sachin Digambar Talekar)

**File Names:**
```
kaveri-talekar.jpg      ← Candidate photo
sachin-talekar.jpg      ← Spouse (Youth Leader) photo
```

**Image Specs:**
- Size: 400x400 pixels (square, 1:1 ratio)
- Format: JPG, PNG, or WebP
- File Size: Under 300KB each
- Style: Professional headshots/portraits

**Display:** Photos appear on left, names on right in Candidate Hero section

---

## 📁 Location 3: Leader Images

**Folder Path:**
```
E:\campaign\public\images\leaders\
```

**What to upload:**
- Photos of political leaders (headshots)
- 6 images minimum (can add more)

**File Names:**
```
01-narendra-modi.jpg
02-amit-shah.jpg
03-devendra-fadnavis.jpg
04-leader-4.jpg
05-leader-5.jpg
06-leader-6.jpg
```

**Image Specs:**
- Size: 300x300 pixels (square, 1:1 ratio)
- Format: JPG, PNG, or WebP
- File Size: Under 200KB each
- Style: Professional headshots (will be displayed in circular frames)

**Note:** Update leader names in `src/data/partyData.json` if needed

---

## 📋 Step-by-Step Upload Instructions

### Method 1: Using File Explorer (Windows)

1. **Open File Explorer**
2. **Navigate to:** `E:\campaign\public\images\`
3. **For Social Work Images:**
   - Open `social-work` folder
   - Copy and paste your 27 images
   - Rename them to match the list above
4. **For Leader Images:**
   - Open `leaders` folder
   - Copy and paste your leader photos
   - Rename them to match: `01-narendra-modi.jpg`, etc.

### Method 2: Using Command Line

```bash
# Navigate to project folder
cd E:\campaign

# Copy social work images
# (Copy your images to public/images/social-work/)

# Copy leader images
# (Copy your images to public/images/leaders/)
```

---

## ✅ Verification Checklist

After uploading images:

- [ ] All 27 social work images are in `public/images/social-work/`
- [ ] All social work images are named correctly (01-27)
- [ ] Candidate photo is in `public/images/candidates/` as `kaveri-talekar.jpg`
- [ ] Spouse photo is in `public/images/candidates/` as `sachin-talekar.jpg`
- [ ] All leader images are in `public/images/leaders/`
- [ ] All leader images are named correctly (01-06)
- [ ] Images are optimized (under size limits)
- [ ] Refresh browser to see changes

---

## 🔍 Where Images Appear on Website

### Social Work Images
- **Location:** "Social Work & Contributions" section
- **Display:** Below each activity description
- **Layout:** Grid layout, responsive

### Candidate Photos
- **Location:** "Candidate" section (main hero section)
- **Display:** Circular photos, photo on left, name on right
- **Layout:** Side-by-side for candidate and spouse

### Leader Images
- **Location:** Top of page, "Party Header" section
- **Display:** Circular images in a gallery
- **Layout:** Grid of circular leader photos

---

## 🛠️ Troubleshooting

### Image Not Showing?

1. **Check folder location** - Must be in `public/images/` (not `src/`)
2. **Check filename** - Must match exactly (case-sensitive)
3. **Check file format** - Use .jpg, .png, or .webp
4. **Clear browser cache** - Press Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
5. **Check browser console** - Press F12 → Console tab for errors

### Wrong Image Appearing?

- Verify filename matches the activity/leader number
- Check `src/data/candidateData.json` for social work images
- Check `src/data/partyData.json` for leader images

### Image Too Large/Slow Loading?

- Optimize images using [TinyPNG.com](https://tinypng.com/)
- Resize images before uploading
- Keep file sizes under limits (500KB for social work, 200KB for leaders)

---

## 📝 Quick Reference

| Image Type | Folder | Count | Size | Format |
|------------|--------|-------|------|--------|
| Social Work | `public/images/social-work/` | 27 | 800x600px | JPG/PNG/WebP |
| Candidates | `public/images/candidates/` | 2 | 400x400px | JPG/PNG/WebP |
| Leaders | `public/images/leaders/` | 6+ | 300x300px | JPG/PNG/WebP |

---

## 💡 Tips

1. **Optimize before uploading** - Use TinyPNG or similar tools
2. **Use consistent naming** - Follow the exact naming convention
3. **Test after upload** - Refresh browser to verify images appear
4. **Keep backups** - Save original images before optimizing

---

## 📞 Need Help?

- See `IMAGE_SETUP_GUIDE.md` for detailed instructions
- Check `public/images/social-work/README.md` for social work images
- Check `public/images/leaders/README.md` for leader images

