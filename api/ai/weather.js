const CITY_NAME = 'Baku'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.OPENWEATHER_API_KEY

  if (!apiKey) {
    return res.status(200).json({
      temp: 24,
      description: 'partly cloudy',
      humidity: 55,
      wind: 12,
    })
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(CITY_NAME)}&appid=${apiKey}&units=metric`
    const response = await fetch(url)
    const data = await response.json()

    if (data.cod !== 200) throw new Error(data.message)

    res.status(200).json({
      temp: Math.round(data.main.temp),
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind: Math.round(data.wind.speed),
    })
  } catch (error) {
    console.error('Weather error:', error.message)
    res.status(200).json({
      temp: null,
      description: 'unknown',
      humidity: null,
      wind: null,
    })
  }
}