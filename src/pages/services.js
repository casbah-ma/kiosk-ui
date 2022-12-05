const { API_BASE_URL, API_KEY, API_WEATHER_URL } = require("../config/constants");

export async function fetchData() {
  return await fetch(API_BASE_URL).then((response) => response.json());

}

export async function getweather(location) {
  return await fetch(API_WEATHER_URL + location[0] + '&lon=' + location[1] + '&appid=' + API_KEY + '&units=metric').then((response) => response.json());
}

export function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

export function formatDate(){
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
return currentDate.toLocaleDateString('en-us', options);
}

