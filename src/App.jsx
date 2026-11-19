import FeedbackBanner from './components/FeedbackBanner.jsx'
import ForecastCard from './components/ForecastCard.jsx'
import SunTimesCard from './components/SunTimesCard.jsx'
import TemperatureChart from './components/TemperatureChart.jsx'
import WeatherHeader from './components/WeatherHeader.jsx'
import WeatherHighlights from './components/WeatherHighlights.jsx'
import WeatherSidebar from './components/WeatherSidebar.jsx'
import CurrentWeatherCard from './components/CurrentWeatherCard.jsx'
import useWeather from './hooks/useWeather.js'

function App() {
  const {
    city,
    search,
    setSearch,
    current,
    dailyForecast,
    hourlyForecast,
    loading,
    error,
    hasApiKey,
    handleSearch,
  } = useWeather()

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto flex min-h-screen max-w-[1600px] max-md:block">
        <WeatherSidebar />

        <main
          id="overview"
          className="mx-auto w-full min-w-0 max-w-[1376px] px-[clamp(22px,4vw,58px)] pb-[25px] pt-[34px] max-md:px-5 max-md:pb-5 max-md:pt-6 max-[420px]:px-3.5"
        >
          <WeatherHeader
            search={search}
            onSearchChange={setSearch}
            onSubmit={handleSearch}
            loading={loading}
          />

          {!hasApiKey && (
            <FeedbackBanner>
              Add <code>VITE_WEATHER_API_KEY</code> to a <code>.env</code> file in the
              project root to load live weather.
            </FeedbackBanner>
          )}

          {error && <FeedbackBanner kind="error">{error}</FeedbackBanner>}

          <section
            className="grid grid-cols-1 gap-[18px] lg:grid-cols-[minmax(0,1.45fr)_minmax(290px,0.85fr)]"
            aria-label="Current weather and forecast"
          >
            <CurrentWeatherCard weather={current} city={city} loading={loading} />
            <ForecastCard forecast={dailyForecast} loading={loading} />
          </section>

          <WeatherHighlights weather={current} />

          <section
            className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,0.85fr)]"
            aria-label="Temperature and daylight"
          >
            <TemperatureChart forecast={hourlyForecast} timezoneOffset={current?.timezone ?? 0} loading={loading} />
            <SunTimesCard weather={current} />
          </section>

          <footer className="flex justify-between gap-3 px-0.5 pt-5 text-[9px] text-slate-400 max-[420px]:flex-col max-[420px]:gap-1">
            <span>Weather data provided by OpenWeather</span>
            <span>All temperatures in Celsius</span>
          </footer>
        </main>
      </div>
      <span className="sr-only" aria-live="polite">
        {loading ? 'Loading weather data' : error}
      </span>
    </div>
  )
}

export default App
