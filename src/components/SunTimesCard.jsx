import { formatLocalTime } from '../utils/weather.js'

function SunTimesCard({ weather }) {
  const timezoneOffset = weather?.timezone ?? 0

  return (
    <article className="flex min-w-0 flex-col rounded-[18px] border border-slate-200 bg-white px-[21px] pb-4 pt-[19px] shadow-sm max-md:min-h-[190px] max-md:px-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="mb-1.5 text-[9px] font-extrabold tracking-[1.35px] text-slate-400">DAYLIGHT</p>
          <h2 className="m-0 text-base font-bold tracking-[-0.4px] text-slate-800">Sunrise &amp; sunset</h2>
        </div>
        <span className="grid size-[29px] place-items-center rounded-[9px] bg-amber-50 text-xl text-amber-500" aria-hidden="true">
          ☼
        </span>
      </div>

      <div className="relative mx-2.5 mt-[22px] h-[83px] overflow-hidden border-b border-dashed border-slate-200" aria-hidden="true">
        <span className="absolute -bottom-[50px] left-[7%] h-[110px] right-[7%] rounded-t-full border border-b-0 border-dashed border-slate-200" />
        <span className="absolute left-1/2 top-1 grid size-7 -translate-x-1/2 place-items-center rounded-full bg-amber-100 text-[17px] text-amber-500">
          ☀
        </span>
        <span className="absolute bottom-[-4px] left-[6%] z-10 size-2 rounded-full bg-indigo-400" />
        <span className="absolute bottom-[-4px] right-[6%] z-10 size-2 rounded-full bg-indigo-400" />
      </div>

      <div className="mt-auto flex justify-between pt-3.5">
        <div className="grid gap-1">
          <span className="text-[9px] text-slate-400">Sunrise</span>
          <strong className="text-xs text-slate-700">
            {weather ? formatLocalTime(weather.sys.sunrise, timezoneOffset) : '—'}
          </strong>
        </div>
        <div className="grid gap-1 text-right">
          <span className="text-[9px] text-slate-400">Sunset</span>
          <strong className="text-xs text-slate-700">
            {weather ? formatLocalTime(weather.sys.sunset, timezoneOffset) : '—'}
          </strong>
        </div>
      </div>
    </article>
  )
}

export default SunTimesCard
