const locationInput = document.getElementById('location')
document.getElementById('search-btn').addEventListener('click', () => {

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&appid=f64f157b7259a274b9d1d28e34b737ed`
    locationInput.value = ''
    fetch(api)
        .then(res => res.json())
        .then(data => showTem(data))

})

const city = document.getElementById('city')
const condition = document.getElementById('condition')
const temp = document.getElementById('temp')
const indigator = document.getElementById('condition-indigator')

function showTem(weather) {

    if (weather.weather[0].main == "Haze") {
        indigator.src = "./images/haze.png"
    } else if (weather.weather[0].main == "Clouds") {
        indigator.src = "./images/clouds.png"
    } else if (weather.weather[0].main == "Rain") {
        indigator.src = "./images/rain.png"
    }else{
        indigator.src = "https://openweathermap.org/img/wn/02d@2x.png"
    }

    city.innerText = weather.name;
    condition.innerText = weather.weather[0].main;
    temp.innerHTML = `${(weather.main.temp - 273.15).toFixed(2)}&deg;C`;

}