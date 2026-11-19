import { formatForecastDay } from '../utils/weather.js'
import WeatherIcon from './WeatherIcon.jsx'

function ForecastCard({ forecast, loading }) {
  return (
    <article id="forecast" className="min-h-[260px] rounded-[18px] border border-slate-200 bg-white px-[23px] pb-[17px] pt-[23px] shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="mb-1.5 text-[9px] font-extrabold tracking-[1.35px] text-slate-400">THE DAYS AHEAD</p>
          <h2 className="m-0 text-base font-bold tracking-[-0.4px] text-slate-800">5-day forecast</h2>
        </div>
        <span className="grid size-[30px] place-items-center rounded-[10px] bg-indigo-50 text-[17px] text-indigo-500" aria-hidden="true">↗</span>
      </div>

      {forecast.length ? (
        <div className="mt-[11px]">
          {forecast.map((day) => (
            <div
              className="grid min-h-[39px] grid-cols-[44px_39px_minmax(0,1fr)_32px] items-center border-b border-slate-100 last:border-0"
              key={day.date}
            >
              <span className="text-[10px] font-bold text-slate-700">{formatForecastDay(day.date)}</span>
              <WeatherIcon
                icon={day.weather?.[0]?.icon}
                description={day.weather?.[0]?.description}
                className="size-[37px]"
              />
              <span className="truncate text-[10px] capitalize text-slate-500">{day.weather?.[0]?.description}</span>
              <span className="text-right text-xs font-bold text-slate-800">{Math.round(day.main.temp)}°</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid min-h-[170px] content-center gap-[7px] text-center text-xs text-slate-500">
          {loading ? 'Loading forecast…' : 'Your forecast will appear here'}
          {!loading && <span className="text-[10px] text-slate-400">Search for a city to explore the week ahead.</span>}
        </div>
      )}
    </article>
  )
}

export default ForecastCard
