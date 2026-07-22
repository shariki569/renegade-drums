# Renegade Drums and Percussions

Simple SEO-friendly React site for Renegade Drums and Percussions — a local Philippine marching band in Cebu City (double drums, bass & lyre, bugle).

## Run locally

```bash
cd renegade-drums
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Contact

- Address: 1 Villagonzalo St, Cebu, Cebu City, Philippines
- Phone: +967 2 234 459
- Email: renegadedrums2010@gmail.com
- Facebook: https://www.facebook.com/p/Renegade-Drums-and-Percussions-100094352492521/

## Media (photos & videos)

All media lives under `public/` and is registered in **`src/data/media.js`**.

See `public/MEDIA.md` for folder layout. Short version:

1. Drop the file into the matching folder (`images/tribal/`, `videos/drum-bugle/`, etc.)
2. Add one entry in `src/data/media.js`

Hero clips → `HERO_CLIPS`  
Video page tabs → `TRIBAL_CLIPS` / `DRUM_BUGLE_CLIPS`  
Galleries → `SINULOG_GALLERY` / `DRUM_BUGLE_GALLERY` / `TRIBAL_GALLERY`  
Home photos → `HOME_MEDIA`

## Live chat (Tawk.to)

1. Copy `.env.example` to `.env`
2. In Tawk.to go to **Administration → Channels → Chat Widget**
3. Paste your IDs:

```env
VITE_TAWK_PROPERTY_ID=your_property_id
VITE_TAWK_WIDGET_ID=your_widget_id
```

4. Restart `npm run dev` (Vite only reads env on start)

On Vercel/hosting, add the same `VITE_TAWK_*` variables in the project settings.
