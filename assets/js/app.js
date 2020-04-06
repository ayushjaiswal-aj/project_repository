document.getElementById("getCity").addEventListener('click',getWeatherInfo)

function getWeatherInfo(){
let cityName = document.getElementById("city")
console.log(cityName)
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cd166405bb5bf65c79e0b0a844b09aa0`)
 .then((weather) => { weather.json().then(data => {
//$("#mainWeather").innerhtml(data.name + " is having " + data.weather[0].description)
console.log(data)
}) } )
 .catch((error)=>{ console.log(error)});
}















