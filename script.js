const apiKey = 'de93b9fc1363db83f12e17eacffce8f0';
const WEATHER_API = new URL("http://api.openweathermap.org/data/2.5/weather?q=London");


function BuildURL(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    let cityName = document.getElementById('search-bar').value;
    if (!cityName) {
      document.getElementById('errorMessage').innerHTML = 'Please enter a valid city name';
      return;
    }
    WEATHER_API.searchParams.set('q', cityName);
    let FULL_URL = `${WEATHER_API}&APPID=${apiKey}`;
    GetWeatherReport(FULL_URL);
  }
}


