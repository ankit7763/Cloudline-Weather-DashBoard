export function getForecastDays(entries, timezoneOffset) {
  const days = new Map()

  entries.forEach((entry) => {
    const localDate = new Date((entry.dt + timezoneOffset) * 1000)
    const dateKey = localDate.toISOString().slice(0, 10)
    const localHour = localDate.getUTCHours()
    const previous = days.get(dateKey)

    if (!previous || Math.abs(localHour - 12) < Math.abs(previous.hour - 12)) {
      days.set(dateKey, { entry, hour: localHour })
    }
  })

  return [...days.entries()].slice(0, 5).map(([date, value]) => ({
    date,
    ...value.entry,
  }))
}

export function formatForecastDay(date) {
  return new Intl.DateTimeFormat('en', {
    weekday: 'short',
    timeZone: 'UTC',
  }).format(new Date(`${date}T12:00:00Z`))
}

export function formatLocalTime(timestamp, timezoneOffset) {
  return new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'UTC',
  }).format(new Date((timestamp + timezoneOffset) * 1000))
}
