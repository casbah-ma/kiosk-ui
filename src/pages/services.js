const { API_BASE_URL } = require("../config/constants");

export async function fetchData() {
  return await fetch(API_BASE_URL).then((response) => response.json());

}

export async function getweather() {
  fetchData().then(function (result) {
    
  })
}

