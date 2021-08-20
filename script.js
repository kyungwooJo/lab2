document.getElementById("weatherSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === ""){
      alert("Enter the name of the City in the box!");
      return;
    }

      const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=91dbedf37f0b6615d29841005b6d3b40";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += '<h2>Weather in ' + json.name + "</h2>";
      results += '<h4 class = \"info\"> ' + json.coord.lon + "(longitude) / " + json.coord.lat + '(latitude) </h4>';
      for (let i=0; i < json.weather.length; i++) {
	results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<h4 class = \"info\">' + json.main.temp + " &deg;F</h4>"
      results += "<h4 class = \"info\">"
      for (let i=0; i < json.weather.length; i++) {
	results += json.weather[i].description
	if (i !== json.weather.length - 1)
	  results += ", "
      }
      results += "</h4>";
      document.getElementById("weatherResults").innerHTML = results;
    });
      

    const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=91dbedf37f0b6615d29841005b6d3b40";
    fetch(url2)
      .then(function(response) {
        if(typeof response !== "object"){
          alert("Check your spelling");
        }
        return response.json();
      }).then(function(json) {
        let forecast = "";
        for (let i=0; i < json.list.length; i++) {
      forecast += "<span class = \"weatherContainer\">";    
      forecast += "<h4>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h4>";
      forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
      forecast += "<p>humidity : " + json.list[i].main.humidity + "</p>";
      forecast += "<p>Wind speed: " + json.list[i].wind.speed + "<p>"; 
      forecast += "<p>Wind degree: " + json.list[i].wind.deg + " &#176 </p>";
      forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
      forecast += "</span>";
    }
        forecast += "<div  class = \"marginDiv\"></div>"
        document.getElementById("forecastResults").innerHTML = forecast;
      });

  
  });

const submitBtn = document.getElementById('weatherSubmit');
const toggleSearch = document.getElementById('toggleBtn');
const toggleForm = document.getElementById('weatherForm');
const welcomWords = document.getElementById('welcome-words')

submitBtn.addEventListener('click', ()=> {
  toggleSearch.classList.toggle("toShow");
  toggleForm.classList.toggle("noShow");
  welcomWords.remove();

})

toggleSearch.addEventListener('click', ()=>{
  toggleSearch.classList.toggle("toShow");
  toggleForm.classList.toggle("noShow");
})

let a = { number: 1 };
console.log(a.number);
console.log(a["number"]);

squirrel = { hungry: true, sleeping: false };

squirrel.hasEaten = false;
console.log(squirrel.hasEaten);
