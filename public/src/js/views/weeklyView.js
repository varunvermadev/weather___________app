class WeeklyView {
    parentEl = document.querySelector('.w_forecast--container');
    data;

    render(data) {
        this.data = data;
        const markup = this.data.map((day,i) => {
            return `<div class="w_forecast--box ${ (i==0) ?'active':''} ">
          <div class="day">
            <p>${day.dayName}</p>
          </div>
          <div class="icon"><img src="./src/images/iconspng/${day.icon}" alt=""></div>
          <div class="temp">
            <p>${day.temp} <sup>o</sup>${day.isCelsius ? 'C' : 'F'}</p>
          </div>
        </div>`
        }).join('');
        this.parentEl.innerHTML = '';
        this.parentEl.insertAdjacentHTML('afterbegin', markup);

    }

}

export default new WeeklyView();