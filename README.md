# The Wisconsin Idea

A static senior-year bucket list for UW-Madison students. Check off the Madison experiences you've had, keep your progress saved locally, and reveal a final score when you're ready.

## Project Structure

- `index.html` contains the page structure and score modal.
- `styles.css` handles the visual design and responsive layout.
- `script.js` stores the 100-item checklist and all client-side behavior.

## Run Locally

Because this is a plain static site, you can open `index.html` directly in a browser.

If you want to serve it locally instead:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Features

- 100-item checklist grouped by category
- Live checked-item count and progress bar
- Hidden score reveal in a modal
- Per-category progress pills
- Local persistence with `localStorage`
- Reset flow with confirmation

## Deploy To GitHub Pages

This repo is already structured for a simple GitHub Pages deployment from the root of `main`.

1. Push the latest changes to `main`.
2. In GitHub, open `Settings`.
3. Go to `Pages`.
4. Set `Source` to `Deploy from a branch`.
5. Choose branch `main` and folder `/ (root)`.
6. Save, then wait for the Pages URL to be published.

## Notes

- Checklist state is stored in the browser under `wisconsin-idea-checklist`.
- The score is calculated as `total items - items checked`, so the UI now reads the total dynamically from the checklist data.
