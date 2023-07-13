let input = document.querySelector(".weather-search");
let actualLocation = document.querySelector(".actual-location");
let btn = document.querySelector(".btn-click");
let celsius = document.querySelector(".wd-2");
let cloudDetails = document.querySelector(".wd-3");
let humidity = document.querySelector(".wd-4");
let windSpeed = document.querySelector(".wd-5");
const apiKey = "e484b7212dbad86fcd6fb337aa366672"
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+apiKey

btn.addEventListener("click", ()=>{
    const getLocation = input.value;
    console.log(getLocation);
    actualLocation.innerHTML = "Weather in " + getLocation;

    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        
        console.log(data);
    })
    .catch(error =>{
        console.log(error)
    })
})

