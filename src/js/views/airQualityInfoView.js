import wind from '../../images/wind.svg';
class AirQualityView{
    parentEl = document.querySelector('.air__info');
    data;

    render(data) {
        this.data = data;
        const markup = `<h3 class="heading">Air Conditions</h3>
      <div class="air__info-item">
        <div class="icon">
        <img href = "../../images/wind.svg"/>
        </div>
        <p class="desc">Wind Speed</p>
        <p class="value">${this.data.windSpeed} KM/H</p>
      </div>
      <div class="air__info-item">
        <div class="icon">
          <i class="fa-solid fa-sun"></i>
        </div>
        <p class="desc">UV Index</p>
        <p class="value">${this.data.uv}</p>
      </div>
      <div class="air__info-item">
        <div class="icon">
          <i class="fa-solid fa-droplet"></i>
        </div>
        <p class="desc">Rain Chance</p>
        <p class="value">${this.data.humidity}%</p>
      </div>
      <div class="air__info-item">
        <div class="icon">
          <i class="fa-solid fa-temperature-quarter"></i>
        </div>
        <p class="desc">Real feel</p>
        <p class="value">${this.data.feelsLike}<sup>o</sup>${this.data.celsius ? 'C' : 'F'}
        </p>
      </div>`
        this.parentEl.innerHTML = '';
        this.parentEl.insertAdjacentHTML("afterbegin", markup);
    }
}

export default new AirQualityView();