const countryCoordinates = {
  한국: {
    latitude: 37.5665,   
    longitude: 126.9780
  },
  일본: {
    latitude: 35.6895,   
    longitude: 139.6917
  },
  미국: {
    latitude: 38.9072,   
    longitude: -77.0369
  },
  영국: {
    latitude: 51.5074,   
    longitude: -0.1278
  },
  프랑스: {
    latitude: 48.8566,   
    longitude: 2.3522
  },
  알제리: {
    latitude: 36.7538,   
    longitude: 3.0588
  }
};


const country = document.querySelector('#country');
country.addEventListener('change', function(){
  const name = country.value;
  
  const lat = countryCoordinates[name].latitude;
  const lon = countryCoordinates[name].longitude;
  
  const APIKEY =`068883bb93e928a5a761f33a03409195`;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`;
   
  fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    document.querySelector('.name').innerHTML = `현재 위치 : ${data.name}`;
    document.querySelector('.temp').innerHTML = `현재 온도 : ${data.main.temp}`;    
})
})
  // let info = `
  // <div class="weather">
  //   <div class="${target}"></div>
  //   <div class="temp"></div>
  //   <div class="lat"></div>
  //   <div class="lon"></div>
  // </div>
  // `;
  


  
  
// })


