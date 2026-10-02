# Vacation Rental Marketplace UI

A React and Vite property-listing prototype inspired by a vacation-rental marketplace. It includes a responsive listing page, image gallery, booking panel, amenities dialog, calendar, reviews, host information, and nearby stays.

## Requirements

- Node.js 20.19+ (Node.js 24 was used for verification)
- npm 10+

## Run locally

1. Open a terminal in the project folder.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend and local API together:

   ```bash
   npm run dev
   ```

4. Open the app at [http://localhost:5173](http://localhost:5173).

The local Express API starts at [http://localhost:5000](http://localhost:5000). Vite proxies requests beginning with `/api` to that server in development.

> On Windows PowerShell systems that block `npm.ps1`, use `npm.cmd run dev` instead.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the Vite frontend and Express API concurrently. |
| `npm run dev:client` | Starts only the frontend at port 5173. |
| `npm run dev:server` | Starts only the API at port 5000. |
| `npm run build` | Creates the production frontend bundle in `dist/`. |
| `npm run preview` | Serves the production frontend bundle at port 4173. |
| `npm run lint` | Runs Oxlint across the project. |
| `npm run start` | Starts the Express API only. |

## Production check

```bash
npm run build
npm run lint
npm run preview
```

After starting preview, visit [http://localhost:4173](http://localhost:4173).

## Project structure

```text
src/
  App.jsx              Main listing-page UI and interactions
  App.css              Responsive visual system and page styling
  main.jsx             React entry point
public/listing/        Locally served listing imagery and UI artwork
server.js              Lightweight Express API for local development
docs/
  architecture.pdf     Production-scale marketplace architecture diagram
  architecture.png     Image export of the architecture diagram
  AI_PROMPTS.md        AI-assisted development workflow record
```

## Submission assets

The repository includes the following supporting submission files:

- `docs/architecture.pdf` and `docs/architecture.png`
- `docs/AI_PROMPTS.md`
- `airbnb-marketplace-submission.zip`

The submission ZIP contains the source and supporting documentation while excluding `node_modules` and `dist`.
