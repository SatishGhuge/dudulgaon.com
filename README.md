# Election Campaign Website

A dynamic, single-page election publicity website built with React, featuring full bilingual support (Marathi & English) and WhatsApp integration for public queries.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Bilingual support (Marathi & English) with language toggle
- ✅ Dynamic, data-driven content (JSON-based)
- ✅ WhatsApp integration for problem submission
- ✅ Professional, citizen-focused design
- ✅ Single-page scrolling layout

## Technology Stack

- React 18 (Functional components + Hooks)
- Vite (Build tool)
- CSS3 (Responsive design)

## Project Structure

```
src/
├── components/          # React components
│   ├── LanguageToggle.jsx
│   ├── PartyHeader.jsx
│   ├── LeaderGallery.jsx
│   ├── CandidateHero.jsx
│   ├── AboutSection.jsx
│   ├── SocialWorkSection.jsx
│   ├── WardSection.jsx
│   ├── ContactSection.jsx
│   ├── QueryFormModal.jsx
│   └── Footer.jsx
├── context/            # React Context
│   └── LanguageContext.jsx
├── data/               # JSON data files
│   ├── translations.json
│   ├── partyData.json
│   └── candidateData.json
├── App.jsx
├── App.css
└── main.jsx
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Configuration

### WhatsApp Number
Update the WhatsApp number in `src/data/candidateData.json`:
```json
{
  "whatsappNumber": "919999018585"
}
```

### Content Updates
All content is stored in JSON files:
- `src/data/translations.json` - All text content (bilingual)
- `src/data/candidateData.json` - Candidate information
- `src/data/partyData.json` - Party information and leaders

## Deployment

This website can be deployed on:
- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag & drop the `dist` folder
- **Hostinger**: Upload the `dist` folder via FTP

After building (`npm run build`), deploy the `dist` folder.

## Features in Detail

### Language Toggle
Fixed at the top-right corner, allows switching between Marathi and English instantly.

### Query Form
Floating button at bottom-right opens a modal form. On submission, generates a WhatsApp message and redirects to WhatsApp Web/App.

### Responsive Design
- Mobile: Optimized for screens 320px+
- Tablet: Optimized for screens 768px+
- Desktop: Full layout for screens 1024px+

## License

This project is for election publicity purposes.


