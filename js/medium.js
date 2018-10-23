
let APPID = "c88d6d5a5fa6d1a727d1ec3f0df0147d";
let temp = document.getElementById("temp");
let sky = document.getElementById("sky");

var city = null;


function setCity() {
  city = document.getElementById('cityInput').value;
  console.log(city);

  getData();
}

function getData() {
  temp.innerHTML = "";
  sky.innerHTML = "";

  $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APPID}`, function(data) {

    let main = data['main'];

    data['weather'].map(cond => {
      let li = document.createElement("li");
      
      let title = document.createElement("p");
      let desc = document.createElement("p");

      title.innerHTML = cond['main'];
      desc.innerHTML = cond['description'];

      li.appendChild(title);
      li.appendChild(desc);

      sky.appendChild(li);
    });

    temp.innerHTML = `${city} Temperature: ${main['temp']}`;
  });
}
