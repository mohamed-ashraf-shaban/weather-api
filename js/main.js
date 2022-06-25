
let rowContainer = document.getElementById("display");

let myhttp;
let curdate;
async function getdata(serchVal){

    let myhttp = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=3a55382bb2dd4df4b3a200149211409&q=${serchVal}&days=3`);
    
   myhttp = await myhttp.json();
   curdate = myhttp.current;
   frcdate = myhttp.forecast;
   locationDate = myhttp.location;
    console.log( curdate);
    console.log(frcdate);
    console.log(locationDate);
   
    display()
    
    
}


function display(){

    let displaydata = '';
    displaydata += ` 
    <div class="col-md-4 p-0">
    <div class="weather-box text-white">
      <div class="weather-head d-flex justify-content-between p-2">
        <span>Today</span>
      <span>${curdate.last_updated}</span>
      </div>
      <div class="weather-body pt-4 px-3">
      <h5>${locationDate.name}</h5>
      <p>${curdate.feelslike_c}<sup>o</sup>C
        <img src="https://${curdate.condition.icon}" alt="">
      </p>
      <span class="text-info">${curdate.condition.text}</span>
      <div class="icons-weather py-4">
        <span class="pe-3">
          <img src="images/icon-compass.png" alt="">
          20%
        </span>
        <span class="pe-3">
          <img src="images/icon-compass.png" alt="">
          18km/h
        </span>
        <span class="pe-3">
          <img src="images/icon-compass.png" alt="">
          East
        </span>
      </div>
      </div>
    </div>
    </div>

    <div class="col-md-4 p-0 bg-darkdark">
            <div class="weather-box text-center text-white">
              <div class="weather-head bg-weather-header p-2 text-center">
              <span class="px-5">Tomorrow</span>
                <span>${frcdate.forecastday[1].date}</span>
              </div>
              <div class="weather-body pt-5">
              <img src="https://${frcdate.forecastday[1].day.condition.icon}" alt="">
              <p class="degree">${frcdate.forecastday[1].day.maxtemp_c} <sub>o</sub> C</p>
              
              <span class="d-block mb-3">${frcdate.forecastday[1].day.mintemp_c}<sub>o</sub></span>
              <small class="text-info">Partly cloudy</small>
              </div>
            </div>
          </div>


          <div class="col-md-4 p-0 bg-darkdark">
            <div class="weather-box text-center text-white">
              <div class="weather-head bg-weather-header  p-2">
                <span>${frcdate.forecastday[2].date}</span>
              </div>
              <div class="weather-body pt-5">
              <img src="https://${frcdate.forecastday[2].day.condition.icon}" alt="">
              <p class="degree">${frcdate.forecastday[2].day.maxtemp_c} <sub>o</sub> C</p>
              
              <span class="d-block mb-3">${frcdate.forecastday[2].day.mintemp_c}<sub>o</sub></span>
              <small class="text-info">Partly cloudy</small>
              </div>
            </div>
          </div>
    
    `;

    rowContainer.innerHTML = displaydata;
}
