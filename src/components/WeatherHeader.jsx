function WeatherHeader({ search, onSearchChange, onSubmit, loading }) {
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

      <form
        className="flex h-[46px] w-full max-w-[350px] items-center gap-[9px] rounded-[13px] border border-slate-200 bg-white p-1 pl-[13px] shadow-sm max-md:max-w-none"
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
    </header>
  )
}

export default WeatherHeader
