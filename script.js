const apiKey = '041101cd91d84fa8b96cc6a50f4ac915';
const city = 'Calgary';

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'041101cd91d84fa8b96cc6a50f4ac915'}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        document.getElementById('weather').innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${weatherDescription}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather').innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
    });
