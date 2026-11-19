import { formatLocalTime } from '../utils/weather.js'
import WeatherIcon from './WeatherIcon.jsx'

function CurrentWeatherCard({ weather, city, loading }) {
  const condition = weather?.weather?.[0]
  const timezoneOffset = weather?.timezone ?? 0

  return (
    <article className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[18px] border border-indigo-100 bg-gradient-to-br from-white to-indigo-50 px-[27px] pt-6 shadow-sm max-md:min-h-[245px] max-[420px]:px-[18px]">
      <span
        className="pointer-events-none absolute -right-[17px] -top-[60px] size-[200px] rounded-full border border-amber-100/60"
        aria-hidden="true"
      />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="mb-1.5 text-[9px] font-extrabold tracking-[1.35px] text-slate-400">
            CURRENT WEATHER
          </p>
          <h2 className="m-0 text-[17px] font-bold tracking-[-0.4px] text-slate-800">
            {weather ? `${weather.name}, ${weather.sys.country}` : city}
          </h2>
          <p className="mt-1 text-[10px] text-slate-400">
            {weather ? `Updated at ${formatLocalTime(weather.dt, timezoneOffset)} local time` : 'Live conditions'}
          </p>
        </div>
        <span className="grid size-[38px] place-items-center rounded-[13px] bg-amber-100 text-2xl text-amber-500" aria-hidden="true">
          ✦
        </span>
      </div>

      <div className="relative flex items-center gap-[clamp(18px,4vw,52px)] py-2.5 max-[420px]:gap-[15px]">
        <div className="text-[clamp(60px,7vw,84px)] font-bold leading-none tracking-[-7px] text-slate-800">
          <span>{weather ? Math.round(weather.main.temp) : '—'}</span>
          {weather && <sup className="relative -top-[27px] ml-1 text-[22px] font-medium tracking-[-1px] text-slate-500 max-[420px]:-top-[23px] max-[420px]:text-lg">°C</sup>}
        </div>
        <div className="flex items-center gap-2.5 max-[420px]:gap-1">
          <WeatherIcon
            icon={condition?.icon}
            description={condition?.description || 'Weather icon'}
            className="size-[54px] max-[420px]:size-11"
          />
          <div className="grid gap-1">
            <strong className="text-xs font-bold capitalize text-slate-700 max-[420px]:text-[10px]">
              {condition?.description || (loading ? 'Getting conditions…' : 'Waiting for weather')}
            </strong>
            <span className="text-[10px] text-slate-400 max-[420px]:text-[9px]">
              {weather ? `Feels like ${Math.round(weather.main.feels_like)}°` : 'Search for a city to get started'}
            </span>
          </div>
        </div>
      </div>

      <div className="relative flex min-h-[41px] items-center gap-[18px] border-t border-slate-200 text-[10px] text-slate-500 max-[420px]:gap-2.5">
        <span className="mr-auto flex items-center gap-[7px] font-semibold text-slate-600">
          <i className="size-1.5 rounded-full bg-indigo-500" />
          Today
        </span>
        <span>H: {weather ? `${Math.round(weather.main.temp_max)}°` : '—°'}</span>
        <span>L: {weather ? `${Math.round(weather.main.temp_min)}°` : '—°'}</span>
        <span className="ml-2 flex items-center gap-1.5 text-[8px] font-extrabold tracking-[0.8px] text-emerald-600 max-[420px]:ml-0">
          <i className="size-1.5 rounded-full bg-emerald-400" />
          LIVE
        </span>
      </div>
    </article>
  )
}

export default CurrentWeatherCard
