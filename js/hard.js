let APPID = "c88d6d5a5fa6d1a727d1ec3f0df0147d";

var lon = null;
var lat = null;
var dateTimes = document.getElementById("dateTimes");


function onLoad() {
  let userChoice = confirm("Use current location?");
  
  if(userChoice) {
    if( navigator.geolocation ){
      navigator.geolocation.getCurrentPosition( success, fail );
    }
    else{
      alert("Sorry, this browser does not support geolocation services.");
    }
  } 
}

function success(position) {
  lon = position.coords.longitude;
  lat = position.coords.latitude;
  getDateTimes();
}
function fail() {
  alert("I'm sorry, something went wrong :/")
}

function onSubmit() {
  lon = document.getElementById("lon").value;
  lat = document.getElementById("lat").value;

  console.log(lon, lat);

  getDateTimes();
}

function getDateTimes() {

  $.getJSON(`http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lon}&APPID=${APPID}&callback=?`, function(data) {          


    data['response'].map(resp => {
      let li = document.createElement("li");
      
      let dur = document.createElement("p");
      let riseTime = document.createElement("p");


      dur.innerHTML = `Duration: ${(Math.floor(resp['duration'] / 60))} minutes`;

      let date = new Date(resp['risetime'] * 1000);

      riseTime.innerHTML = date;

      li.appendChild(dur);
      li.appendChild(riseTime);

      dateTimes.appendChild(li);
    });
    
  });
}