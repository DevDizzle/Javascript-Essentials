// Function to show weather details when the form is submitted
function showWeatherDetails(event) {
    event.preventDefault(); // Prevent the form from submitting in the default way

    const city = document.getElementById('city').value; // Get the city name entered by the user
    const apiKey = '81ca2946403ee243434529dc201d22e6'; // Replace with your actual API key

    // Geocoding API URL to get latitude and longitude of the city using HTTPS
    const geocodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

    // Fetch latitude and longitude of the city
    fetch(geocodeUrl)
        .then(response => {
            console.log('Geocoding response:', response); // Log response for debugging
            if (!response.ok) {
                throw new Error('Geocoding request failed');
            }
            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
                throw new Error('City not found');
            }
            console.log('Geocoding data:', data); // Log geocoding data for debugging
            const { lat, lon } = data[0]; // Extract latitude and longitude
            // Weather API URL to get weather details using latitude and longitude
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

            // Fetch weather details
            return fetch(weatherUrl);
        })
        .then(response => {
            console.log('Weather response:', response); // Log response for debugging
            if (!response.ok) {
                throw new Error('Weather request failed');
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather data:', data); // Log weather data for debugging
            const weatherInfo = document.getElementById('weatherInfo'); // Get the element to display weather info
            // Display the weather information
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8457;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error); // Log any errors to the console
            const weatherInfo = document.getElementById('weatherInfo'); // Get the element to display weather info
            // Display an error message
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

// Add event listener to the form to handle submit event
document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);
