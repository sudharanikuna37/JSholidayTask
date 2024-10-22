const weatherDiv = document.getElementById('weather');
const latitude = 35.6895;  
const longitude = 139.6917;

function fetchWeather() {
    const Url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    fetch(Url)
        .then(response => {
                return response.json();
        })
        .then(data => {
            if (data) {
                displayWeather(data.current_weather);
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
            weatherDiv.textContent = 'Failed to load weather data';
        });
}

function displayWeather(weather) {
    const { temperature, weathercode } = weather;
    const weatherDescription = getWeatherDescription(weathercode);
    
    weatherDiv.innerHTML = `
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${weatherDescription}</p>`;
}

function getWeatherDescription(code) {
    const descriptions = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Fog",
        61: "Rain showers",
        63: "Rain",
        80: "Rain showers",
        81: "Rain",
        95: "Thunderstorm",
        99: "Thunderstorm"
    };
    return descriptions[code]
}

fetchWeather();
