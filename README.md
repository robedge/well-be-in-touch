# We’ll Be in Touch

A retro pixel-art deck-building roguelite about the tech hiring pipeline. Play in a desktop or mobile browser. Nine encounters, three bosses, 30 cards, branching interview/rest/networking choices, and permanent resilience upgrades.

## Run locally

Requires Node.js 24 or later. No dependencies to install.

```sh
npm start
```

Open http://localhost:3000. On a phone on the same network, open the computer’s LAN address on port 3000.

```sh
npm test
npm run check
```

## Saves

Progress autosaves in browser storage after every action. Use Save → Export/Import to back up a run or transfer it to another device. Clearing site data removes browser saves. Automatic cloud account synchronization is not implemented.

## GitHub Pages

The Pages workflow deploys `dist/` on every push to `main`. Enable Pages with GitHub Actions as its source. All asset URLs are relative so project Pages URLs work. Node 24 is needed only for tests and local development; the game itself runs entirely in the browser.

The local server serves the same static files used by GitHub Pages.

## Structure

- `dist/game.mjs`: game rules and 30-card catalog
- `dist/app.mjs`: responsive browser interface and save client
- `dist/style.css`: game styling
- `dist/sprites.png`: original generated six-character pixel-art sheet
- `server.mjs`: local development server
- `tests/`: rules and save persistence checks

## Controls

Tap or click a card to play it. Press 1–0 to play cards, E to end the turn, Escape to close panels. Cards spend energy. Progress completes encounters; composure blocks pressure. Confidence persists throughout a run. Completed or failed runs earn experience for permanent upgrades.
