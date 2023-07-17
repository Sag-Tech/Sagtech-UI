import { type ApexOptions } from 'apexcharts'

export const options: ApexOptions = {
  chart: {
    type: 'donut'
  },
  colors: ['#6D3EF1', '#E7E2F8', '#CBBCF8', '#B69FF8', '#9271EE'],
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
        size: '8%'
      }
    }
  }
}
