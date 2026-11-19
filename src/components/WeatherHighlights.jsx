import MetricCard from './MetricCard.jsx'
import { formatLocalTime } from '../utils/weather.js'

function WeatherHighlights({ weather }) {
  const metrics = [
    {
      label: 'Feels like',
      value: weather ? `${Math.round(weather.main.feels_like)}°` : '—',
      description: weather ? 'What it feels like outside' : 'Waiting for data',
      icon: '≈',
      tone: 'indigo',
    },
    {
      label: 'Wind speed',
      value: weather ? (weather.wind.speed * 3.6).toFixed(1) : '—',
      unit: weather ? 'km/h' : '',
      description: weather ? 'Measured near the surface' : 'Waiting for data',
      icon: '⌁',
      tone: 'green',
    },
    {
      label: 'Rain amount',
      value: weather
        ? (weather.rain?.['1h'] ?? weather.snow?.['1h'] ?? 0).toFixed(1)
        : '—',
      unit: weather ? 'mm' : '',
      description: weather ? 'Precipitation in the last hour' : 'Waiting for data',
      icon: '⌁',
      tone: 'blue',
    },
    {
      label: 'Humidity',
      value: weather ? `${weather.main.humidity}%` : '—',
      description: weather ? 'Relative humidity' : 'Waiting for data',
      icon: '◌',
      tone: 'blue',
    },
    {
      label: 'Pressure',
      value: weather ? weather.main.pressure : '—',
      unit: weather ? 'hPa' : '',
      description: weather ? 'Atmospheric pressure' : 'Waiting for data',
      icon: '↗',
      tone: 'violet',
    },
    {
      label: 'Cloud cover',
      value: weather ? `${weather.clouds.all}%` : '—',
      description: weather ? 'Sky covered by clouds' : 'Waiting for data',
      icon: '◉',
      tone: 'amber',
    },
  ]

  return (
    <section className="mt-7 max-md:mt-[23px]" aria-labelledby="highlights-title">
      <div className="mb-[13px] flex items-center justify-between gap-3">
        <div>
          <p className="mb-1.5 text-[9px] font-extrabold tracking-[1.35px] text-slate-400">RIGHT NOW</p>
          <h2 className="m-0 text-base font-bold tracking-[-0.4px] text-slate-800" id="highlights-title">
            Today&apos;s highlights
          </h2>
        </div>
        {weather && (
          <span className="text-right text-[10px] text-slate-400 max-[420px]:max-w-[120px]">
            Local time · {formatLocalTime(weather.dt, weather.timezone)}
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-3 max-lg:gap-2.5">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>
    </section>
  )
}

export default WeatherHighlights
