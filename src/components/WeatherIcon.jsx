function WeatherIcon({ icon, description, className = 'size-12' }) {
  if (!icon) {
    return (
      <span className={`inline-block text-[38px] leading-none ${className}`} aria-hidden="true">
        ☀️
      </span>
    )
  }

  return (
    <img
      className={`block object-contain ${className}`}
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      alt={description || 'Weather'}
      loading="lazy"
    />
  )
}

export default WeatherIcon
