# Deployment Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```
   Creates `dist` folder with optimized files

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Vite and deploys
5. Done! Your site is live

### Netlify
1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site is live!

### Hostinger
1. Build the project: `npm run build`
2. Connect via FTP (FileZilla, etc.)
3. Upload all files from `dist` folder to `public_html`
4. Your site is live!

## Configuration Before Deployment

### Update WhatsApp Number
Edit `src/data/candidateData.json`:
```json
{
  "whatsappNumber": "919999018585"  // Change this
}
```

### Add Leader Images (Optional)
Replace placeholder images in `src/data/partyData.json`:
```json
{
  "leaders": [
    {
      "image": "https://your-domain.com/images/leader1.jpg"
    }
  ]
}
```

### Custom Domain
- **Vercel/Netlify**: Add domain in dashboard settings
- **Hostinger**: Point domain to your hosting account

## Environment Variables (if needed)
Create `.env` file for sensitive data:
```
VITE_WHATSAPP_NUMBER=919999018585
```

Access in code: `import.meta.env.VITE_WHATSAPP_NUMBER`

## Post-Deployment Checklist

- [ ] Test language toggle (Marathi/English)
- [ ] Test WhatsApp query form
- [ ] Verify all sections display correctly
- [ ] Test on mobile device
- [ ] Check contact information accuracy
- [ ] Verify WhatsApp number works

## Support

For issues, check:
1. Browser console for errors
2. Network tab for failed requests
3. Verify all JSON files are valid
4. Check that all imports are correct


