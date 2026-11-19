function WeatherHeader({ search, onSearchChange, onSubmit, loading, darkMode, onToggleDarkMode }) {
  return (
    <header className="mb-[27px] flex items-center justify-between gap-6 max-md:mb-[19px] max-md:flex-col max-md:items-stretch max-md:gap-4">
      <div>
        <p className="mb-1.5 text-[9px] font-extrabold tracking-[1.35px] text-slate-400">
          YOUR WEATHER, AT A GLANCE
        </p>
        <h1 className="m-0 text-[clamp(22px,2.2vw,29px)] font-bold tracking-[-1px] text-slate-800">
          Weather dashboard
        </h1>
      </div>

      <div className="flex w-full max-w-[410px] items-center gap-2 max-md:max-w-none">
        <form
          className="flex h-[46px] min-w-0 flex-1 items-center gap-[9px] rounded-[13px] border border-slate-200 bg-white p-1 pl-[13px] shadow-sm"
          onSubmit={onSubmit}
          role="search"
        >
          <span className="-rotate-12 text-[25px] leading-none text-slate-400" aria-hidden="true">⌕</span>
          <input
            aria-label="Search weather by city"
            className="w-full min-w-0 border-0 bg-transparent text-xs text-slate-700 outline-none placeholder:text-slate-400 focus-visible:outline-none"
            placeholder="Search for a city..."
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
          />
          <button
            className="shrink-0 rounded-[9px] bg-indigo-500 px-3.5 py-[9px] text-[11px] font-bold text-white transition-colors hover:bg-indigo-600 disabled:cursor-wait disabled:opacity-70"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Loading…' : 'Search'}
          </button>
        </form>
        <button
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={darkMode}
          className="theme-toggle grid size-[46px] shrink-0 place-items-center rounded-[13px] border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:bg-slate-50"
          onClick={onToggleDarkMode}
          type="button"
        >
          {darkMode ? (
            <svg aria-hidden="true" className="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
            </svg>
          ) : (
            <svg aria-hidden="true" className="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}

export default WeatherHeader
