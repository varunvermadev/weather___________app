class CurrentWeatherView{
    parentEl = document.querySelector('main');
    data;
    render(data) {
        this.data = data;
        const iconPath = this.getIconPath(this.data);
        let time = this.getTime();
        const markup = `<div class="current__weather-info">
        <div class="current__weather-location">
          <h3>${this.data.location}</h3>
        </div>
        <div class="current__weather-time">
          <div class="time">${time}</div>
        </div>
        <div class="current__weather-temp">
          <h1>${this.data.temp} <sup>o</sup>${this.data.celsius  ? 'C' : 'F'}</h1>
        </div>
        <div class="current__weather-desc">
          <p>${this.data.weatherDesc}</p>
        </div>
      </div>

      <div class="current__weather-img">
        <img src="./src/images/iconspng/${iconPath}" alt="">
      </div>`;
        this.parentEl.innerHTML = '';
        this.parentEl.insertAdjacentHTML("afterbegin", markup);
    }

    getIconPath(data) {
        let path = data.icon;

        if (path == '113.png') {
            if (data.weatherDesc.trim() == 'Clear') {
                path = 'night-113.png';
            }
            else {
                path = 'day-113.png';
            }
        }

        return path;
    }

    getTime() {
        const date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        minute = String(minute).padStart(2, '0');
        let ampm;
        if (hour < 12) {
            ampm = 'AM';
        }
        else if (hour == 12) {
            hour = 12;
            ampm = 'PM';
        }
        else {
            hour = hour - 12;
            ampm = "PM";
        }
        hour = String(hour).padStart(2, '0');
        return `${hour} : ${minute} ${ampm}`;
    }

    addHandlerCurrentWeatherView(handler) {
        window.addEventListener('load', handler);
    }
    renderLoader() {
        const markup = `<div class="loader">
        </div>`;
        this.parentEl.innerHTML = '';
        this.parentEl.insertAdjacentHTML('afterbegin', markup);
    }
}

export default new CurrentWeatherView();

