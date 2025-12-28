# Leader Images

This folder contains images of political leaders displayed in the Party Header section.

## Image Naming Convention

Name your leader images as follows:

- `01-narendra-modi.jpg` - Leader 1: Narendra Modi
- `02-amit-shah.jpg` - Leader 2: Amit Shah
- `03-devendra-fadnavis.jpg` - Leader 3: Devendra Fadnavis
- `04-leader-4.jpg` - Leader 4 (update name in partyData.json)
- `05-leader-5.jpg` - Leader 5 (update name in partyData.json)
- `06-leader-6.jpg` - Leader 6 (update name in partyData.json)

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 300x300 pixels (square, 1:1 aspect ratio)
- **Max File Size**: 200KB per image
- **Quality**: High quality, clear headshot photos
- **Style**: Professional headshots, circular crop will be applied automatically

## How to Add Images

1. Place your leader image files in this folder (`public/images/leaders/`)
2. Name them according to the convention above
3. The images will automatically appear in the leader gallery at the top of the website

## Updating Leader Names

To change leader names, edit `src/data/partyData.json`:

```json
{
  "id": 4,
  "name": "Your Leader Name",
  "image": "/images/leaders/04-your-leader.jpg",
  "placeholder": false
}
```

## Adding More Leaders

To add more leaders:

1. Add image to this folder with next number (e.g., `07-new-leader.jpg`)
2. Add entry to `src/data/partyData.json`:
```json
{
  "id": 7,
  "name": "New Leader Name",
  "image": "/images/leaders/07-new-leader.jpg",
  "placeholder": false
}
```

## Removing Leaders

To remove a leader, simply delete their entry from `src/data/partyData.json`.


