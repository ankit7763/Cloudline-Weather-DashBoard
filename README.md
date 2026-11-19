# Cloudline Weather Dashboard

A responsive weather dashboard built with React, Vite, Tailwind CSS, and the OpenWeather API.

## Run locally

```bash
npm install
```

For local development, copy `.env.example` to `.env` in the project root and add your
OpenWeather API key:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

Then start the development server:

```bash
npm run dev
```

The app starts with London selected. Use the search field to load another city. Without an API key, the dashboard displays setup guidance instead of sample weather.

For Vercel, add `OPENWEATHER_API_KEY` as an environment variable in the project's
Settings. Do not use the `VITE_` variable in production; Vite exposes `VITE_` values
to browser code. The Vercel API route reads `OPENWEATHER_API_KEY` server-side.

## Scripts

- `npm run dev` — start Vite
- `npm run build` — create a production build
- `npm run lint` — run ESLint

The local development server uses `VITE_WEATHER_API_KEY` directly from the browser.
Keep `.env` out of source control. The deployed app requests weather through a Vercel
API route so the production key is not sent to the browser.

## Code structure

- `src/App.jsx` composes the dashboard.
- `src/components/` contains the responsive UI sections and reusable metric card.
- `src/hooks/useWeather.js` manages search, loading, and weather state.
- `src/services/weatherApi.js` fetches current conditions and forecast data.
- `src/utils/weather.js` formats dates and groups forecast entries.
