fetch('https://api.example.com/weather')
    .then(response => response.json())
    .then(data => {
        // Update the HTML elements with weather information
        document.querySelector('.city-name').textContent = data.city;
        document.querySelector('.temperature').textContent = data.temperature + '°C';
        document.querySelector('.conditions').textContent = data.conditions;
    })
    .catch(error => console.log(error));