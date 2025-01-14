import type { ApexChartType } from '@/types'

function generateData(count: number, yrange: any) {
  let i = 0
  const series = []
  while (i < count) {
    const x = (i + 1).toString()
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    series.push({
      x: x,
      y: y
    })
    i++
  }
  return series
}

export const basicHeatmap: ApexChartType = {
  height: 380,
  type: 'heatmap',
  series: [
    {
      name: 'Metric 1',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric 2',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric 3',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric 4',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric 5',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric  6',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric 7',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric 8',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric 9',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    }
  ],
  options: {
    chart: {
      height: 380,
      type: 'heatmap',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#1c84ee'],
    xaxis: {
      type: 'category'
    }
  }
}

export const multipleHeatmap: ApexChartType = {
  height: 380,
  type: 'heatmap',
  series: [
    {
      name: 'Metric 1',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric 2',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric 3',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric 4',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric 5',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric 6',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric 7',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric 8',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric 9',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    }
  ],
  options: {
    chart: {
      height: 380,
      type: 'heatmap',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#1c84ee', '#53389f', '#7f56da', '#ff86c8', '#ef5f5f', '#ff6c2f', '#f9b931', '#22c55e', '#4ecac2'],
    xaxis: {
      type: 'category'
    }
  }
}

export const colorRangeHeatmap: ApexChartType = {
  height: 380,
  type: 'heatmap',
  series: [
    {
      name: 'Jan',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Feb',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Mar',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Apr',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'May',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Jun',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Jul',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Aug',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Sep',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    }
  ],
  options: {
    chart: {
      height: 380,
      type: 'heatmap',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,

        colorScale: {
          ranges: [
            {
              from: -30,
              to: 5,
              name: 'Low',
              color: '#1c84ee'
            },
            {
              from: 6,
              to: 20,
              name: 'Medium',
              color: '#ef5f5f'
            },
            {
              from: 21,
              to: 45,
              name: 'High',
              color: '#f9b931'
            },
            {
              from: 46,
              to: 55,
              name: 'Extreme',
              color: '#22c55e'
            }
          ]
        }
      }
    },
    dataLabels: {
      enabled: false
    }
  }
}

export const rangeWithoutShade: ApexChartType = {
  height: 380,
  type: 'heatmap',
  series: [
    {
      name: 'Metric1',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric2',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric3',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric4',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric5',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric6',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric7',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric8',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric8',
      data: generateData(20, {
        min: 0,
        max: 90
      })
    }
  ],
  options: {
    chart: {
      height: 380,
      type: 'heatmap',
      toolbar: {
        show: false
      }
    },
    stroke: {
      width: 0
    },
    plotOptions: {
      heatmap: {
        radius: 30,
        enableShades: false,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 50,
              color: '#1c84ee'
            },
            {
              from: 51,
              to: 100,
              color: '#4ecac2'
            }
          ]
        }
      }
    },
    colors: ['#1c84ee', '#4ecac2'],
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#fff']
      }
    },

    xaxis: {
      type: 'category'
    },
    grid: {
      borderColor: '#f1f3fa'
    }
  }
}
