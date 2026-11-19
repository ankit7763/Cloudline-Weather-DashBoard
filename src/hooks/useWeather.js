import { useEffect, useState } from 'react'
import { fetchCityWeather, hasWeatherApiKey } from '../services/weatherApi.js'

const EMPTY_WEATHER = {
  current: null,
  dailyForecast: [],
  hourlyForecast: [],
}

function useWeather() {
  const [city, setCity] = useState('delhi')
  const [search, setSearch] = useState('delhi')
  const [weatherData, setWeatherData] = useState(EMPTY_WEATHER)
  const [refreshKey, setRefreshKey] = useState(0)
  const [loading, setLoading] = useState(hasWeatherApiKey)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!hasWeatherApiKey) return undefined

    const controller = new AbortController()

    fetchCityWeather(city, controller.signal)
      .then(setWeatherData)
      .catch((requestError) => {
        if (requestError.name === 'AbortError') return

        setWeatherData(EMPTY_WEATHER)
        setError(
          requestError instanceof TypeError
            ? 'Could not connect to OpenWeather. Check your internet connection and try again.'
            : requestError.message,
        )
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [city, refreshKey])

  function handleSearch(event) {
    event.preventDefault()
    const nextCity = search.trim()
    if (!nextCity) return

    setSearch(nextCity)
    setError('')
    if (hasWeatherApiKey) {
      setLoading(true)
      setWeatherData(EMPTY_WEATHER)
    }

    if (nextCity === city) {
      if (hasWeatherApiKey) setRefreshKey((key) => key + 1)
      return
    }

    setCity(nextCity)
  }

  return {
    city,
    search,
    setSearch,
    current: weatherData.current,
    dailyForecast: weatherData.dailyForecast,
    hourlyForecast: weatherData.hourlyForecast,
    loading,
    error,
    hasApiKey: hasWeatherApiKey,
    handleSearch,
  }
}

export default useWeather
