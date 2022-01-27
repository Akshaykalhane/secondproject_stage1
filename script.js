
let cityname=document.getElementById('cityname');
let degree=document.getElementById('degree')
let description=document.getElementById('description')

// degree.innerText="24%"
// cityname.innerText="arvi"

window.onload=function getweather(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        degree.innerText="geolocation not supported"
    }
}

function showPosition (data) {
    console.log(data);
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    console.log(lat,long)
    let url=`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data) 
        // console.log(data.city.name)
        cityname.innerText=data.city.name;
        cityname.innerHTML+=" |";
        console.log(data.list[0].temp)
        degree.innerText=data.list[0].temp.night;
        degree.innerHTML+=" "+' |'
        console.log(data.list[0].weather[0].description)
        description.innerText=data.list[0].weather[0].description;
    })
    // cityname.innerText=lat;
    // degree.innerText=long;
    
}


