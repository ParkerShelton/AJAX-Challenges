let names = document.getElementById("names");

/*
{
  "message": "success",
  "number": NUMBER_OF_PEOPLE_IN_SPACE,
  "people": [
    {"name": NAME, "craft": SPACECRAFT_NAME},
    ...
  ]
}
*/


$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {

    data['people'].forEach(function (d) {

      let person = document.createElement("li");
      person.innerHTML = (`Name: ${d['name']}, Spacecraft: ${d['craft']}`);

      names.appendChild(person);
    });

});
