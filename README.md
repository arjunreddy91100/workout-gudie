# Workout Gudie

**Choose a muscle. Find your next movement.**

An interactive fitness website for beginners and regular gym users, built with **Astra in Codex** and deployed on Netlify.

**[Try the live website](https://workout-gudie.netlify.app/)** · **[Explore back exercises](https://workout-gudie.netlify.app/#muscle=lats)**

## Why I built it

I wanted a simple way to select a muscle and find exercises I could actually do at the gym. The project grew into a public muscle explorer with technique guides, related YouTube videos, and a workout journal.

## Built with Astra

I used Astra in Codex to turn my idea into a working website. I directed the product, clarified the muscle-selection experience, and requested improvements through feedback. Astra assisted with implementation, styling, debugging, testing, and deployment.

This is a showcase of an AI-assisted development process: starting with a practical need, iterating on the experience, and shipping a usable result.

## Features

- Interactive front and back muscle maps covering 15 muscle groups.
- 38 exercises with equipment filters, search, technique cues, and suggested sets and reps.
- Hover previews, click/tap selection, and keyboard controls.
- Related YouTube guides and searches sorted by popularity.
- Shareable links that open a specific muscle's exercises.
- Workout journal with dated sessions, weights, reps, completed sets, and notes.
- Rest timer and JSON backup/restore.
- Responsive layout, beginner help, and an optional upper-body focus preset.

## Technology

HTML, CSS, JavaScript ES modules, and SVG. Browser localStorage keeps workout records on the device. A small Node.js server supports local development; Netlify serves the public static site. No framework or dependency installation is required.

## Run locally

Install Node.js, then run from this folder:

```sh
npm start
```

Open [localhost preview](http://127.0.0.1:4173/). Use the server instead of opening index.html directly so JavaScript modules load correctly.

## Project structure

| File | Purpose |
| --- | --- |
| index.html | Page and dialog structure |
| muscle.css | Responsive styling |
| anatomy.js | Interactive SVG muscle maps |
| muscles.js | Exercise catalogue and technique cues |
| explorer.js | Selection, filters, sharing, journal, and timer |
| videos.js | Related video links |
| plans.js | Optional five-day example plan |
| server.cjs | Local preview server |

## Data and scope

Workout records stay in the current browser; they do not sync between devices. Clearing browser data can erase them, so export a backup when needed. Muscle share links contain only the selected muscle, never workout notes or records.

YouTube videos open on the external website. Displayed view counts are dated snapshots, not live rankings. The guides provide general exercise information and adjustable examples rather than individualized coaching. The anatomy illustrations are simplified.

## What I learned through this project

- How to refine a broad idea into a focused interaction.
- How to improve a website through feedback and mobile checks.
- Why local storage, clear help, and shareable URLs matter to the user experience.
- How to take an AI-assisted project from an idea to a public website.

## Feedback

Try the live website and open a GitHub issue with suggestions or bugs. For a bug report, include the muscle or exercise, the device/browser, and what you expected to happen. Do not include private workout records.
