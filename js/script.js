let input = document.querySelector(".weather-search");
let actualLocation = document.querySelector(".actual-location");
let btn = document.querySelector(".btn-click");
let celsius = document.querySelector(".wd-2");
let cloudDetails = document.querySelector(".wd-3");
let weatherIcon = document.querySelector(".weather-icon");
let humidity = document.querySelector(".wd-4");
let windSpeed = document.querySelector(".wd-5");
const apiKey = "bb19114de0d6658a7657a2811f946d50"

 //`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(input.value)}&APPID=bb19114de0d6658a7657a2811f946d50` // `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=bb19114de0d6658a7657a2811f946d50`


btn.addEventListener("click", ()=>{
    const getLocation = input.value;
    console.log(getLocation);
    actualLocation.innerHTML = "Weather in " + getLocation;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${getLocation}&appid=${apiKey}&units=metric`;
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        let temperature = data.main.temp;
        let cloudDetail = data.weather[0].description;
        let icon = data.weather[0].icon;
        let iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
        let hum = data.main.humidity;
        let wind = data.wind.speed;
        celsius.innerHTML = `${temperature}\u00B0C`;
        weatherIcon.src = iconUrl;
        cloudDetails.innerHTML = cloudDetail
        humidity.innerHTML = `Humidity: ${hum}`;
        windSpeed.innerHTML = `Wind speed ${wind}km/h`
        console.log(data);
    })
    .catch(error =>{
        console.log(error)
    })
})

