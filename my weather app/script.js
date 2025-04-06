const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-search-weather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-search-form]");
const loadingScreen = document.querySelector(".loading-page");

const userInfoContainer = document.querySelector(".user-info-container");

let currentTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
currentTab.classList.add("current-tab");
getFromSessionStorage();

function switchTab(clickedTab){
    if (clickedTab != currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
    }
    if(!searchForm.classList.contains("active")){
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
        //now we have to fetch the userinfo details from the session storage (your weather)
    }
    else{
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        getFromSessionStorage();
    }
}

userTab.addEventListener("click", () => {
    switchTab(userTab);
});
searchTab.addEventListener("click", () => {
    switchTab(searchTab);
});

function getFromSessionStorage(){
    let localCoordinates = sessionStorage.getItem("user-coordinates");
    //if there is no data in local storage then first of all we don't have access to the location 
    if(!localCoordinates){
        grantAccessContainer.classList.add("active");
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates) {
    const {lat, lon} = coordinates; 
    //now there is no need for grant access bcz its turned on in last function 
    grantAccessContainer.classList.remove("active");
    //while loading this animation goes on 
    loadingScreen.classList.add("active");

    // API CALL 
    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        if(!response.ok){
            throw new Error(`HTTP bad request ${response.status}`);
        }

        let data = await response.json();
        console.log(data);
        //now we have the data to remove loading screen and show user weather data  
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }catch(e){
        loadingScreen.classList.remove("active");
        console.error("unable to fetch the data", e);
    }
}

function renderWeatherInfo(data){
    const cityName = document.querySelector("[data-city-name]");
    const countryIcon = document.querySelector("[data-nation-icon]");
    const weatherDesc = document.querySelector("[data-weather-desc]");
    const weatherIcon = document.querySelector("[data-weather-img]");
    const temp = document.querySelector("[data-weather-temparature]");
    const windSpeed = document.querySelector("[data-weather-windspeed]");
    const humidity = document.querySelector("[data-weather-humidity]");
    const cloudiness = document.querySelector("[data-weather-clouds]");

    // fetching data from the API to these values 
    cityName.innerText = data?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
    weatherDesc.innerText = data?.weather?.[0]?.description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`;
    temp.innerText = `${data?.main?.temp} °C`;
    windSpeed.innerText = `${data?.wind?.speed} m/s`;
    humidity.innerText = `${data?.main?.humidity} %`;
    cloudiness.innerText = `${data?.clouds?.all} %`; 
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert("Unable to fetch your present location, permission denied");
    }
}

function showPosition(position){
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

let grantAccessButton = document.querySelector("[data-grant-access]");
grantAccessButton.addEventListener("click", getLocation);

let searchInput = document.querySelector("[data-search-input]");
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;
    if(cityName === ""){
        return;
    }else{
        fetchSearchWeatherInfo(cityName);
    }
});

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try{
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if(!response.ok){
            throw new Error(`HTTP bad request ${response.status}`);
        }
        let data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(e){
        console.error("unable fetch the data from the API", e);
    }
}