const URL = 'https://api.openweathermap.org/data/2.5/weather?';
const APIKEY = '63fa526812e2d884916c2f6fc8571283';
const weatherSite = 'https://openweathermap.org/';
const city = document.querySelector('.weather__city');
const result = '';
async function getWeather() {

  const cityId = city.value;
  const requestHeaders = new Headers();
  requestHeaders.append('apikey', APIKEY);

  const request = await fetch(`${URL}id=${cityId}&units=metric&APPID=${APIKEY}`, {
    method: 'GET'
  });
  
  const result = await request.json();
  showWeather(result);
  console.log(result);
}

getWeather();

city.onchange = getWeather;

function showWeather(data) {
  console.log(data); 
  document.querySelector('.weather__name').textContent = data.name;   
  document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp) + '&deg';
  document.querySelector('.weather__img').innerHTML = '<img src="' + weatherSite + 'img/wn/' + data.weather[0].icon + '@2x.png">';
  document.querySelector('.weather__desc').textContent = data.weather[0].description;
  document.querySelector('.weather__wind').innerHTML = '<b>wind</b>: ' + data.wind.speed + ' m/s';
  document.querySelector('.weather__pressure').innerHTML = '<b>pressure:</b> ' + data.main.pressure;
}

