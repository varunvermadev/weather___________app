import { Chart } from "chart.js/auto";

class HourlyView {
    parentEl = document.querySelector('.h_forecast');
    data;
    chart;
    dummyX = [
"00:00",
"01:00",
"02:00",
"03:00",
"04:00",
"05:00",
"06:00",
"07:00",
"08:00",
"09:00",
"10:00",
"11:00",
"12:00",
"13:00",
"14:00",
"15:00",
"16:00",
"17:00",
"18:00",
"19:00",
"20:00",
"21:00",
"22:00",
"23:00"
    ]
    
    dummyY = [
        29.5,
        29.4,
        29.1,
        28.4,
        28.8,
        28.2,
        27.7,
        29,
        31.5,
        34.2,
        36.6,
        38.6,
        39.7,
        40.2,
        40.2,
        39.9,
        39.2,
        38.3,
        36,
        33.6,
        32,
        30.9,
        30,
        29.1
    ];


    renderChart() {
        let xValues = this.dummyX
        let yValues = this.dummyY;
        let chartData = {
            labels: xValues,
            datasets: [{
                label: "Temprature in °C",
                data: yValues,
                borderWidth: 1,
                backgroundColor: 'rgba(2, 27, 249,.25)',
                borderColor: 'rgba(2, 27, 249,.75) ',
                fill: true,

            }]
        }

        const chartOptions = {
            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    ticks: {
                        color:'white'
                    }
                }
            },
            plugins: {
        legend: {
            labels: {
                color: 'white' // Change color of legend labels
            }
        }
            } ,
        tooltips: {
        mode: 'nearest' // Show tooltips for the nearest data point
    },
        };
        this.chart = new Chart(this.parentEl.querySelector('#hour_chart'), {
            type: 'line',
            data: chartData,
            options : chartOptions
        })

    }

    updateChartData(data) {
        this.data = data;
        this.chart.data.labels = this.data.x;
        this.chart.data.datasets[0].data = this.data.y;
        this.chart.data.datasets[0].label = `Temperature in °${this.data.isCelsius ? 'C' : 'F'}`;
        this.chart.update();
    }

}

export default new HourlyView();