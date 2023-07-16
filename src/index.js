let now = new Date();
let heading2 = document.querySelector(".heading2");

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let day = days[now.getDay()];
let month = months[now.getMonth()];

heading2.innerHTML = `${day}, ${month} ${date}, ${hours}:${minutes} ${year}`;

function displayWeatherConditions(response) {
  console.log(response.data);
  document.querySelector(".heading5").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#hum").innerHTML = response.data.main.humidity;
  document.querySelector("#speed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#clear").innerHTML = response.data.weather[0].main;
}

function search(city) {
  let apiKey = "30390a4cc024be0d4b1217dd32de1c1f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeatherConditions);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city").value;
  search(city);
}

let units = "metric";
let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

search("New York");
