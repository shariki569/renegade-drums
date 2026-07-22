# Media folders

Drop files here, then register them in `src/data/media.js`.

## Images
- `images/home/` — homepage photos
- `images/drum-bugle/` — Drum & Bugle gallery extras
- `images/tribal/` — Tribal Percussions gallery + client shots
- `images/sinulog-YYYY/` — festival booking galleries (e.g. sinulog-2025)

## Videos
- `videos/drum-bugle/` — Drum & Bugle clips
- `videos/tribal/` — Tribal Percussions clips
- `videos/hero/` — hero-only clips
- `videos/posters/` — poster/thumbnail images for videos

## Add a gallery photo
1. Put the file in the matching `images/` folder
2. Add one object to the matching array in `src/data/media.js`

## Add a video clip
1. Put the `.mp4` in `videos/drum-bugle/` or `videos/tribal/`
2. Optionally add a poster image in `videos/posters/`
3. Add one object to `DRUM_BUGLE_CLIPS` or `TRIBAL_CLIPS` in `src/data/media.js`
