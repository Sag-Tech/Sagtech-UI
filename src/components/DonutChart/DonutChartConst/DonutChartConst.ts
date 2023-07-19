import { type ApexOptions } from 'apexcharts'
export const getChartOptions = (colors: string[], size: number): ApexOptions => {
  const options: ApexOptions = {
    colors,
    tooltip: {
      enabled: false
    },
    stroke: {
      show: true,
      colors: ['#070715'],
      width: 1
    },
    states: {
      hover: {
        filter: {
          type: 'none'
        }
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none'
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: `${size}%`
        }
      }
    }
  }
  return options
}
