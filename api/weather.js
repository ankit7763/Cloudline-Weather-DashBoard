import { getForecastDays } from '../src/utils/weather.js'

const API_BASE = 'https://api.openweathermap.org/data/2.5'

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET')
    return response.status(405).json({ message: 'Method not allowed.' })
  }

  const apiKey = process.env.OPENWEATHER_API_KEY?.trim()
  if (!apiKey) {
    return response.status(503).json({
      message: 'Weather service is not configured. Add OPENWEATHER_API_KEY in Vercel settings.',
    })
  }

  const city = typeof request.query?.city === 'string' ? request.query.city.trim() : ''
  if (!city || city.length > 100) {
    return response.status(400).json({ message: 'Enter a city name to search.' })
  }

  const params = new URLSearchParams({ q: city, appid: apiKey, units: 'metric' })

  let currentResponse
  let forecastResponse
  try {
    const responses = await Promise.all([
      fetch(`${API_BASE}/weather?${params}`),
      fetch(`${API_BASE}/forecast?${params}`),
    ])
    currentResponse = responses[0]
    forecastResponse = responses[1]
  } catch {
    return response.status(502).json({
      message: 'Could not connect to OpenWeather. Check your internet connection and try again.',
    })
  }

  let current
  let forecast
  try {
    const data = await Promise.all([
      currentResponse.json(),
      forecastResponse.json(),
    ])
    current = data[0]
    forecast = data[1]
  } catch {
    return response.status(502).json({
      message: 'OpenWeather returned an invalid response. Please try again.',
    })
  }

  const failedResponse = [currentResponse, forecastResponse].find(
    (upstreamResponse) => !upstreamResponse.ok,
  )

  if (failedResponse) {
    if (failedResponse.status === 404) {
      return response.status(404).json({
        message: 'We could not find that city. Check the spelling and try again.',
      })
    }
    if (failedResponse.status === 401) {
      return response.status(502).json({
        message: 'OpenWeather rejected the API key. Check its status in your OpenWeather account.',
      })
    }
    return response.status(502).json({
      message: 'Weather data could not be loaded. Please try again.',
    })
  }

  return response.status(200).json({
    current,
    dailyForecast: getForecastDays(forecast.list, current.timezone),
    hourlyForecast: forecast.list.slice(0, 8),
  })
}
