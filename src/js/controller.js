import * as model from './model';
import currentWeatherView from './views/currentWeatherView';
import searchView from './views/searchView';
import airQualityInfoView from './views/airQualityInfoView';
import hourlyView from './views/hourlyView';
import navbarView from './views/navbarView';
import weeklyView from './views/weeklyView';

async function controlCurrentWeather() {
    let pos = await model.getCurrentPosition();
    const { latitude, longitude } = pos.coords;
    let query = `${latitude},${longitude}`;
    renderWeather(query);
    return query;
    
}
async function renderWeather(query) {
    currentWeatherView.renderLoader();
    await model.getCurrentWeather(query);
    currentWeatherView.render(model.state.currentPositionWeather);   
    airQualityInfoView.render(model.state.currentPositionWeather);
    navbarView.render(model.state);
    hourlyView.updateChartData(model.state.chartData);
    weeklyView.render(model.state.daysForecast);
}
async function controlSearchResult() {
    let query = searchView.getQuery();
    renderWeather(query);
}


function initializeChart() {
    hourlyView.renderChart();
}

function controlUnitConversion() {
    currentWeatherView.render(model.state.currentPositionWeather);
    airQualityInfoView.render(model.state.currentPositionWeather);
    hourlyView.updateChartData(model.state.chartData);
    weeklyView.render(model.state.daysForecast);
}


function init() {
    currentWeatherView.addHandlerCurrentWeatherView(controlCurrentWeather);
    searchView.addHandlerCurrentPosSearch(controlCurrentWeather);
    searchView.addHandlerSearch(controlSearchResult);
    navbarView.addHandlerUnits(controlUnitConversion);
    initializeChart();
}
init();