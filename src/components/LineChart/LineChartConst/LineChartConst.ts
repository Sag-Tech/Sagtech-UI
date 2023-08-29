import { type ApexOptions } from 'apexcharts'
export const getChartOptions = (min: number, max: number, tickAmountX: number): ApexOptions => {
  const options: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: {
        show: false
      },
      fontFamily: 'Manrope',
      zoom: {
        enabled: false
      }
    },
    tooltip: {
      enabled: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    colors: ['#6D3EF1', '#9271EE', '#CBBCF8'],
    xaxis: {
      type: 'category',
      tickAmount: tickAmountX,
      decimalsInFloat: 0,
      axisTicks: {
        show: true,
        color: '#000'
      },
      axisBorder: {
        show: false
      },
      labels: {
        showDuplicates: false,
        show: true,
        hideOverlappingLabels: true,
        style: {
          colors: ['#51515B', '#51515B', '#51515B', '#51515B'],
          fontSize: '14px',
          fontFamily: 'Manrope',
          fontWeight: 500
        },
        offsetY: 10,
        offsetX: 0
      }
    },
    yaxis: {
      show: true,
      tickAmount: 3,
      min,
      max,
      labels: {
        show: true,
        offsetY: 3,
        style: {
          colors: ['#51515B'],
          fontSize: '14px',
          fontFamily: 'Manrope',
          fontWeight: 500,
          cssClass: ''
        }
      }
    },
    grid: {
      show: true,
      borderColor: '#393944',
      strokeDashArray: 7,
      position: 'back',
      yaxis: {
        lines: {
          show: true
        }
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 10,
        left: 16
      }
    },
    legend: {
      show: false
    }
  }
  return options
}
