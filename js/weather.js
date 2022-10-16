const API_KEY = "727399ae70bb5c63867b45f2cf2d9a59";

// latitude: 위도 longitude: 경도
function geoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(Response => Response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `: ${data.weather[0].main} / ${data.main.temp}`;
    });
}

function geoError() {
    alert("Can`t find your location")
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);