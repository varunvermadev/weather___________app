import { API_URL} from "./helpers";

export const state = {
    currentPositionWeather: { 
        
    },
    chartData: {
        x: {},
        y: {},
        isCelsius: true,
    },

    daysForecast : []
}

export const getCurrentPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}

const daysName = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];


export const getCurrentWeather = async function(query){
    // api call 
    if (!query) {
        console.error('No query is found');
        return;
    }
    const res = await fetch(API_URL + `&q=${query}&days=7`);
    const data = await res.json();
    const { location, current, forecast } = data;
    state.chartData = getChartData(forecast.forecastday[0].hour);
    state.daysForecast = getThreeDayForecast(forecast);
    state.currentPositionWeather =  {
        location: location.name,
        time: location.localtime.slice(-5),
        weatherDesc: current.condition.text,
        feelsLike: current.feelslike_c,
        uv: current.uv,
        windSpeed: current.wind_kph,
        windDirection: current.wind_dir,
        temp: current.temp_c.toFixed(1),
        humidity: current.humidity,
        visibility: current.vis_km,
        icon: current.condition.icon.slice(-7),
        
    }


}

function getThreeDayForecast(data) {
    let days = data.forecastday;
    days = days.map(day => {
        return {
            dayName: daysName[new Date(day.date).getDay()],
            temp: day.day.avgtemp_c,
            icon : day.day.condition.icon.slice(-7),
            isCelsius : true,
        }
    })

    return days;
}

function getChartData(data) {
    return {
        x: data.map(hr => hr.time.slice(-5)),
        y: data.map(hr => hr.temp_c),
        isCelsius: true,
    }
}