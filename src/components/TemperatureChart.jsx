import { formatLocalTime } from '../utils/weather.js'

function TemperatureChart({ forecast, timezoneOffset, loading }) {
  const temperatures = forecast.map((entry) => entry.main.temp)
  const minTemperature = temperatures.length ? Math.min(...temperatures) : 0
  const temperatureRange = Math.max(
    temperatures.length ? Math.max(...temperatures) - minTemperature : 0,
    1,
  )
  const points = forecast.map((entry, index) => ({
    entry,
    x: forecast.length > 1 ? 18 + (index * 324) / (forecast.length - 1) : 180,
    y: 79 - ((entry.main.temp - minTemperature) / temperatureRange) * 47,
  }))
  const line = points.map(({ x, y }) => `${x},${y}`).join(' ')
  const area = points.length
    ? `M ${line.replaceAll(' ', ' L ')} L 342,94 L 18,94 Z`
    : ''

  return (
    <article className="min-w-0 rounded-[18px] border border-slate-200 bg-white px-[21px] pb-4 pt-[19px] shadow-sm max-md:px-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="mb-1.5 text-[9px] font-extrabold tracking-[1.35px] text-slate-400">
            TEMPERATURE THROUGH THE DAY
          </p>
          <h2 className="m-0 text-base font-bold tracking-[-0.4px] text-slate-800">
            Today&apos;s temperature predictions
          </h2>
        </div>
        <span className="shrink-0 rounded-lg bg-indigo-50 px-[9px] py-1.5 text-[9px] text-indigo-500">
          Next 24 hours
        </span>
      </div>

      {points.length ? (
        <>
          <div className="mt-[11px] h-[105px]">
            <svg className="block h-full w-full overflow-visible" viewBox="0 0 360 104" role="img" aria-label="Temperature forecast trend">
              <defs>
                <linearGradient id="temperature-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#7384f6" stopOpacity=".2" />
                  <stop offset="100%" stopColor="#7384f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={area} fill="url(#temperature-fill)" />
              <polyline
                points={line}
                fill="none"
                stroke="#6378f4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
              {points.map(({ entry, x, y }) => (
                <circle key={entry.dt} cx={x} cy={y} r="3" fill="#fff" stroke="#6378f4" strokeWidth="2" />
              ))}
            </svg>
          </div>
          <div className="mt-0.5 grid grid-cols-8 gap-[3px] text-center">
            {points.map(({ entry }) => (
              <div className="grid gap-1" key={entry.dt}>
                <strong className="text-[9px] font-bold text-slate-600">{Math.round(entry.main.temp)}°</strong>
                <span className="truncate text-[8px] text-slate-400">
                  {formatLocalTime(entry.dt, timezoneOffset)}
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="grid min-h-[133px] place-items-center text-center text-[11px] text-slate-400">
          {loading ? 'Loading temperature trend…' : 'Temperature trend will appear when weather data is available.'}
        </div>
      )}
    </article>
  )
}

export default TemperatureChart
