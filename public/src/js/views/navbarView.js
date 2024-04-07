class NavbarView{
    parentEl = document.querySelector('.navbar');
    data;
    chartData;
    fahrenheit = this.parentEl.querySelector('#btn--f');
    celsius = this.parentEl.querySelector('#btn--c');
    daysForecast;
    render(data) {
        this.data = data.currentPositionWeather;
        this.chartData = data.chartData;
        this.daysForecast = data.daysForecast;

    }
    addHandlerUnits(handler) {
        this.parentEl.querySelector('.navbar__btns--unit').addEventListener('click', e => {
            if (!e.target.closest('.btn')) return;      
            
            let btn = e.target.closest('.btn');
            if (btn.id == 'btn--f' && !btn.classList.contains('active')) {
                this.data.temp = this.convertCelsiusToFahrenheit(this.data.temp);
                this.data.feelsLike = this.convertCelsiusToFahrenheit(this.data.feelsLike);
                this.chartData.y = this.chartData.y.map(temp => this.convertCelsiusToFahrenheit(temp));
                this.daysForecast.forEach(day => {
                    day.isCelsius = false;
                    day.temp = this.convertCelsiusToFahrenheit(day.temp);
                })
                this.celsius.classList.remove('active');
                this.fahrenheit.classList.add('active');
                this.data.celsius = false;
                this.chartData.isCelsius = false;
            }
            
            if (btn.id == 'btn--c' && !btn.classList.contains('active')) {
                this.data.temp = this.convertFahrenheitToCelsius(this.data.temp)
                this.data.feelsLike = this.convertFahrenheitToCelsius(this.data.feelsLike);
                this.chartData.y = this.chartData.y.map(temp => this.convertFahrenheitToCelsius(temp));
                this.daysForecast.forEach(day => {
                    day.isCelsius = true;
                    day.temp = this.convertFahrenheitToCelsius(day.temp);
                })
                this.celsius.classList.add('active');
                this.fahrenheit.classList.remove('active');
                this.data.celsius = true;
                this.chartData.isCelsius = true;
            }
            handler();


        })
    }

    convertCelsiusToFahrenheit(celsius) {
        return (((celsius) * 9 / 5) + 32).toFixed(1);
    }

    convertFahrenheitToCelsius(fahrenheit) {
        return (((fahrenheit- 32)*5)/9).toFixed(1);
    }

    
}

export default new NavbarView();