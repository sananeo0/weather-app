const apiKey = "f9fe77e0992e4e388f0100542230511";

const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIconImg = document.getElementById("weather-icon-img");

let city = "";

search.addEventListener("input", () => {
    city = search.value;
});

searchBtn.addEventListener("click", () => {
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    document.querySelector(".location").innerHTML = `${data.location.country}, ${data.location.name}`;
    document.querySelector(".time").innerHTML = data.location.localtime.split(' ')[1];

    weatherIconImg.src = data.current.condition.icon;
    document.querySelector(".temp").innerHTML = `${data.current.temp_c}°C`;
    document.querySelector(".humidity").innerHTML = `${data.current.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.current.wind_kph}km/h`;
    document.querySelector(".feels-like").innerHTML = `${data.current.feelslike_c}°C`;
    document.querySelector(".uv-index").innerHTML = data.current.uv;

    document.querySelector(".weather").style.display = "block";
}
