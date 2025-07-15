function connectGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // console.log(`위도:${lat} 경도:${lon}`);
  const APIKEY =`068883bb93e928a5a761f33a03409195`;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`;
  const weatherIMG = document.querySelector('.weather > img');
  fetch(URL)
  .then(response => response.json())
  .then(data => {
      
      document.querySelector('.name').innerHTML = `현재 위치 : ${data.name}`;
      document.querySelector('.temp').innerHTML = `현재 온도 : ${data.main.temp}`;
      const icon = data.weather[0].icon;
      const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      weatherIMG.setAttribute('src', iconURL);
    })
  
  
}
function errorGeo(){
  alert(`위치 정보 연결 실패`);
}
navigator.geolocation.getCurrentPosition(connectGeo , errorGeo);

// 필요한 api는 검색을 통해서 - 사용할수 있는 옵션이 다 다름.