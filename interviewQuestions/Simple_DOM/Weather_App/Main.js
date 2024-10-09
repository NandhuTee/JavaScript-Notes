const apiKey = 'bb04ed471e895a7fe4fdc954c7a19bcc';
        const getWeather = () => {
            const city = document.getElementById('city').value;
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
                .then(res => res.json())
                .then(data => {
                    if (data.cod === 200) {
                        document.getElementById('result').innerText = `Weather in ${city}: ${data.weather[0].description}, ${data.main.temp}°C`;
                    } else {
                        document.getElementById('result').innerText = 'City not found';
                    }
                })
                .catch(() => document.getElementById('result').innerText = 'Error retrieving data');
        }