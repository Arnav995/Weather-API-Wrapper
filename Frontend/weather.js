const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const errorMessage = document.getElementById("errorMessage");

const cityNameEl = document.querySelector(".cityName");
const temperatureEl = document.getElementById("temperature");
const conditionEl = document.getElementById("condition");

// Backend base URL (change when deploying)
const BASE_URL = "http://localhost:5000/api/weather";

// Event Listener
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    // Clear previous messages
    errorMessage.textContent = "";
    cityNameEl.textContent = "";
    temperatureEl.textContent = "";
    conditionEl.textContent = "";

    if (!city) {
        errorMessage.textContent = "Please enter a city name.";
        return;
    }

    getWeather(city);
});




// Main function to call backend
async function getWeather(city) {
    try {
        const response = await fetch(`${BASE_URL}/current?city=${city}`);

        if (!response.ok) {
            throw new Error("City not found or server error");
        }

        const data = await response.json();

        displayWeather(data);

    } catch (error) {
        errorMessage.textContent = error.message;
    }
}

// Function to update UI
function displayWeather(data) {
    cityNameEl.textContent = data.name;
    temperatureEl.textContent = `Temperature: ${data.main.temp} °C`;
    conditionEl.textContent = `Condition: ${data.weather[0].description}`;
}
