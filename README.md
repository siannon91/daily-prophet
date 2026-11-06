# The Daily Prophet - Ministry Bounty Board

A small web app styled as a wizarding newspaper. It shows a "wanted" board of Death Eaters, built from the data of the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API.

**Live site:** https://siannon91.github.io/daily-prophet/


## Features

- Fetches data from two endpoints (`/users` and `/todos`) with Axios
- Combines the two lists: each user gets the title of their first todo as a "binding counter-spell"
- Live search by wizard name, Muggle alias or city
- Filter by status: all, captured or still at large (combines with the search)
- Mark wanted people as captured. The choice is saved in `localStorage` and remembered after reloading
- Network status codes are logged to the console, and errors are shown to the user


## Project structure

| File | Purpose |
|---|---|
| `src/main.js` | Entry point. Connects all the modules |
| `src/config.js` | API address and endpoints |
| `src/api.js` | HTTP requests with Axios and error handling |
| `src/mapper.js` | Turns raw API data into our own format using `.map()` |
| `src/filter.js` | Search logic |
| `src/storage.js` | Saving captured people in `localStorage` |
| `src/events.js` | Event listeners (search and clicks) |
| `src/dom.js` | Drawing cards and messages on the page |

To adapt the app to a similar API, change `config.js` and `mapper.js`. The rest of the app only uses our own field names.

## Built with

- Vanilla JavaScript (ES modules)
- [Vite](https://vite.dev/)
- [Axios](https://axios-http.com/)
- [gh-pages](https://www.npmjs.com/package/gh-pages)