// Header
const cityName = document.getElementById('city-name');
const currentDate = document.getElementById('current-date');
const themeToggle = document.getElementById('theme-toggle');

// Weather
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');
const feelsHumidity = document.getElementById('feels-humidity');
const windSpeed = document.getElementById('wind-speed');
const humidity = document.getElementById('humidity');
const sunriseTime = document.getElementById('sunrise-time');

// Next Prayer
const nextPrayerName = document.getElementById('next-prayer-name');
const nextPrayerTime = document.getElementById('next-prayer-time');

// Prayer Times
const timeFajr = document.getElementById('time-fajr');
const timeZuhr = document.getElementById('time-zuhr');
const timeAsr = document.getElementById('time-asr');
const timeMaghrib = document.getElementById('time-maghrib');
const timeIsha = document.getElementById('time-isha');


async function fetchWeather() {
    const ApiKey = 'f1905524d76ec4a940151c5a40369c59'
    const city = 'attock'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`
    try {
        const weather_data = await fetch(url)

        if (!weather_data.ok) {
            throw new Error(`HTTP error, Status: ${weather_data.status}!`)
        }
        const w_data = await weather_data.json()
        return w_data
    } catch (error) {
        console.error("Fetch error:", error)
    }
}

async function fetchPrayers() {
    const url = `https://api.aladhan.com/v1/timingsByCity?city=Islamabad&country=Pakistan&method=1`
    try {
        const adhan_data = await fetch(url)

        if (!adhan_data.ok) {
            throw new Error(`HTTP error, Status: ${adhan_data.status}!`)
        }
        const a_data = await adhan_data.json()
        return a_data
    } catch (error) {
        console.error("Fetch error:", error)
    }
}

async function fetchAll() {
    const [weatherData, prayerData] = await Promise.all([
        fetchWeather(),
        fetchPrayers()
    ])
    displayAll(weatherData, prayerData)
}

fetchAll()

function displayAll(weather, adhan) {
    //weather data display
    cityName.textContent = weather.name
    temperature.textContent = `${Math.round(weather.main.temp)}°C`
    condition.textContent = weather.weather[0].description
    feelsHumidity.textContent = `Feels like ${Math.round(weather.main.feels_like)}°C · ${weather.main.humidity}% Humidity`
    windSpeed.textContent = `${Math.round(weather.wind.speed)} km/h`
    humidity.textContent = `${weather.main.humidity}%`
    sunriseTime.textContent = adhan.data.timings.Sunrise
    const date = new Date()
    currentDate.textContent = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    //adhan data display
    timeFajr.textContent = convertTo12hr(adhan.data.timings.Fajr)
    timeZuhr.textContent = convertTo12hr(adhan.data.timings.Dhuhr)
    timeAsr.textContent = convertTo12hr(adhan.data.timings.Asr)
    timeMaghrib.textContent = convertTo12hr(adhan.data.timings.Maghrib)
    timeIsha.textContent = convertTo12hr(adhan.data.timings.Isha)
}
function convertTo12hr(time) {
    const [hours, minutes] = time.split(':')
    const hrs = parseInt(hours)
    const ampm = hrs >= 12 ? 'PM' : 'AM'
    const hrs12 = hrs % 12 || 12
    return `${hrs12}:${minutes} ${ampm}`
}



