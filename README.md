# Cloudline Weather Dashboard

A responsive weather dashboard built with React, Vite, Tailwind CSS, and the OpenWeather API.

## Run locally

```bash
npm install
```

Copy `.env.example` to `.env` in the project root and add your OpenWeather API key:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

Then start the development server:

```bash
npm run dev
```

The app starts with London selected. Use the search field to load another city. Without an API key, the dashboard displays setup guidance instead of sample weather.

## Scripts

- `npm run dev` — start Vite
- `npm run build` — create a production build
- `npm run lint` — run ESLint

Vite exposes `VITE_` variables to the browser. The key is therefore visible to users of the deployed app; this setup is suitable for learning and local development, not for protecting a production API secret. Keep `.env` out of source control.

## Code structure

- `src/App.jsx` composes the dashboard.
- `src/components/` contains the responsive UI sections and reusable metric card.
- `src/hooks/useWeather.js` manages search, loading, and weather state.
- `src/services/weatherApi.js` fetches current conditions and forecast data.
- `src/utils/weather.js` formats dates and groups forecast entries.
