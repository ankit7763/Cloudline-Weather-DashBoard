function FeedbackBanner({ kind = 'notice', children }) {
  const isError = kind === 'error'

  return (
    <div
      className={`mb-[18px] flex items-center gap-[11px] rounded-xl border px-[15px] py-3 text-xs leading-relaxed ${
        isError
          ? 'border-red-200 bg-red-50 text-red-800'
          : 'border-indigo-100 bg-indigo-50 text-indigo-900'
      }`}
      role={isError ? 'alert' : 'status'}
    >
      <span
        className={`grid size-5 shrink-0 place-items-center rounded-full text-[11px] font-extrabold ${
          isError ? 'bg-red-100' : 'bg-indigo-100 text-indigo-600'
        }`}
        aria-hidden="true"
      >
        {isError ? '!' : 'i'}
      </span>
      <p className="m-0">{children}</p>
    </div>
  )
}

export default FeedbackBanner
