<template>
  <div class="chart-container" style="position: relative; height: 25vh; width:100%;">
    <canvas id="DisplayChart" ></canvas>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Chart_from_API',
  data () {
    return {
      myChart: []
    }
  },
  async mounted () {
    await this.$http.get('https://api.wirespec.dev/wirespec/stackoverflow/fetchchartdataforvuejs') //Your API has to be given here
      .then((response) => {
        const result = response.data
        const ctx = document.getElementById('DisplayChart').getContext('2d')
        const Chart_data = []
        for (let i = 0; i < result.date.length; i++) {
          Chart_data.push({
            x_axis: moment(result.date[i], 'X').toDate(),  //To Convert Unix Timestamp into Date
            y_axis: result.challenge[i]
          })
        }
        // eslint-disable-next-line init-declarations,prefer-const
        let myChart
        if (myChart !== undefined) {
          myChart.destroy()
        }

        // eslint-disable-next-line no-undef
        myChart = new Chart(ctx, {
          type: 'line',
          data: {
            datasets: [
              {
                label: 'Chart_from_API',
                data: Chart_data,
                borderColor: '#EA5455',
                lineTension: 0
              }
            ]
          },
          options: {
            lineTension: 0,
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: false
                  },
                  ticks: {
                    beginAtZero: true,
                    // eslint-disable-next-line no-unused-vars
                    callback (value) {
                      return `${value  }`    // y-axis value will append k to it
                    }
                  }
                }
              ],
              xAxes: [
                {
                  type: 'time',
                  time: {
                    unit: 'month'
                  },
                  scaleLabel: {
                    display: true,
                    labelString: ''
                  }
                }
              ]
            }
          }
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

