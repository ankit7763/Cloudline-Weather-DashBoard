function MetricCard({ icon, tone, label, value, unit, description }) {
  const iconTones = {
    indigo: 'bg-indigo-50 text-indigo-500',
    blue: 'bg-sky-50 text-sky-500',
    green: 'bg-emerald-50 text-emerald-500',
    violet: 'bg-violet-50 text-violet-500',
    amber: 'bg-amber-50 text-amber-500',
  }

  return (
    <article className="flex min-h-[143px] flex-col items-start rounded-[18px] border border-slate-200 bg-white px-[18px] pb-[14px] pt-4 shadow-sm max-lg:px-3.5 max-md:min-h-[137px] max-[420px]:px-[13px]">
      <span className={`mb-[11px] grid size-[29px] place-items-center rounded-[10px] text-[19px] leading-none ${iconTones[tone]}`}>
        {icon}
      </span>
      <span className="text-[10px] text-slate-500">{label}</span>
      <strong className="mt-[3px] text-[23px] font-bold leading-tight tracking-[-0.7px] text-slate-800">
        {value}
        {unit && <small className="ml-1 whitespace-nowrap text-[11px] font-semibold tracking-normal text-slate-500">{unit}</small>}
      </strong>
      <span className="mt-auto pt-[5px] text-[9px] text-slate-400">{description}</span>
    </article>
  )
}

export default MetricCard
