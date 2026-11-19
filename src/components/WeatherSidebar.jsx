function WeatherSidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-56 shrink-0 flex-col border-r border-slate-200 bg-white px-5 py-[30px] max-md:static max-md:h-auto max-md:w-full max-md:flex-row max-md:items-center max-md:justify-between max-md:border-r-0 max-md:border-b max-md:px-5 max-md:py-3.5 max-[420px]:px-3.5">
      <a className="flex items-center gap-[11px] text-slate-800 no-underline" href="#overview" aria-label="Cloudline home">
        <span className="grid size-[37px] place-items-center rounded-[13px] bg-indigo-500 text-lg font-extrabold text-white shadow-lg shadow-indigo-200 max-md:size-[33px]">
          C
        </span>
        <span className="text-lg font-extrabold tracking-[-0.7px] max-md:text-base">cloudline</span>
      </a>

      <div className="mb-[14px] ml-3 mt-[54px] text-[10px] font-bold tracking-[1.4px] text-slate-400 max-md:hidden">
        MENU
      </div>
      <nav className="grid gap-2 max-md:flex max-md:gap-[5px]" aria-label="Main navigation">
        <a
          href="#overview"
          className="flex min-h-[46px] items-center gap-[13px] rounded-xl bg-indigo-50 px-[13px] text-[13px] font-semibold text-indigo-600 transition-colors hover:bg-indigo-100 max-md:min-h-[37px] max-md:gap-[7px] max-md:px-2.5 max-md:text-[10px] max-[420px]:w-[37px] max-[420px]:justify-center max-[420px]:px-0 max-[420px]:text-[0px]"
          aria-current="page"
        >
          <span className="w-[19px] text-center text-xl leading-none max-md:text-base max-[420px]:text-lg">◫</span>
          <span>Overview</span>
        </a>
        <a
          href="#forecast"
          className="flex min-h-[46px] items-center gap-[13px] rounded-xl px-[13px] text-[13px] font-semibold text-slate-500 transition-colors hover:bg-indigo-50 hover:text-indigo-600 max-md:min-h-[37px] max-md:gap-[7px] max-md:px-2.5 max-md:text-[10px] max-[420px]:w-[37px] max-[420px]:justify-center max-[420px]:px-0 max-[420px]:text-[0px]"
        >
          <span className="w-[19px] text-center text-xl leading-none max-md:text-base max-[420px]:text-lg">◷</span>
          <span>Forecast</span>
        </a>
      </nav>

      <div className="mt-auto rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-indigo-50 p-[19px_15px] max-md:hidden">
        <div className="text-[27px] leading-none text-amber-400" aria-hidden="true">☁</div>
        <p className="my-3 text-[13px] font-bold leading-relaxed text-slate-700">
          Weather, made
          <br />
          a little clearer.
        </p>
        <span className="text-[10px] text-slate-400">Powered by OpenWeather</span>
      </div>
    </aside>
  )
}

export default WeatherSidebar
