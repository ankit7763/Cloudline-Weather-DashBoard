import { getForecastDays } from '../utils/weather.js'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY?.trim() ?? ''
const API_BASE = 'https://api.openweathermap.org/data/2.5'

export const hasWeatherApiKey = Boolean(API_KEY)

async function requestJson(url, signal) {
  const response = await fetch(url, { signal })
  const data = await response.json()

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('We could not find that city. Check the spelling and try again.')
    }
    if (response.status === 401) {
      throw new Error('OpenWeather rejected the API key. Check your .env value and key status.')
    }
    throw new Error(data.message || 'Weather data could not be loaded. Please try again.')
  }

  return data
}

export async function fetchCityWeather(city, signal) {
  const query = encodeURIComponent(city)
  const params = `q=${query}&appid=${API_KEY}&units=metric`
  const [current, forecast] = await Promise.all([
    requestJson(`${API_BASE}/weather?${params}`, signal),
    requestJson(`${API_BASE}/forecast?${params}`, signal),
  ])

  return {
    current,
    dailyForecast: getForecastDays(forecast.list, current.timezone),
    hourlyForecast: forecast.list.slice(0, 8),
  }
}
