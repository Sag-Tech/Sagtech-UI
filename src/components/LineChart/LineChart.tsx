import React from 'react'
import Chart from 'react-apexcharts'
import { type ApexOptions } from 'apexcharts'

interface LineChartTypes {
  type?: string
}
const LineChart: React.FC<LineChartTypes> = () => {
  const series = [
    {
      name: 'employees',
      data: [[1, 7], [1.8, 14], [2.2, 9], [2.6, 17], [2.8, 11], [3.5, 17], [4.2, 10], [5, 18]]
    },
    {
      name: 'projects',
      data: [[1, 9], [1.4, 14], [1.7, 11], [2.3, 17], [2.6, 14], [2.8, 16], [3.3, 13], [4, 18], [4.7, 13], [4.8, 14], [5, 9]]
    },
    {
      name: 'clients',
      data: [[1, 11], [2.2, 14], [2.8, 20], [4, 9], [5, 20]]
    }
  ]

  const options: ApexOptions = {
    chart: {
      height: 219,
      type: 'line',
      toolbar: {
        show: false
      },
      fontFamily: 'Manrope'
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
      categories: ['Q3 2022', 'Q4 2022', 'Q1 2023', 'Q2 2023'],
      tickAmount: 4,
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        show: true,
        hideOverlappingLabels: true,
        style: {
          colors: ['#51515B', '#51515B', '#51515B', '#51515B'],
          fontSize: '14px',
          fontFamily: 'Manrope',
          fontWeight: 500,
          cssClass: ''
        },
        offsetY: 10,
        offsetX: 35
      }
    },
    yaxis: {
      show: true,
      tickAmount: 3,
      min: 5,
      max: 20,
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
        bottom: 0,
        left: 16
      }
    },
    legend: {
      show: false
    }
  }
  return (
    <div id="chart">
      <Chart
        options={options}
        series={series}
        type="line"
        width={800}
        height={243}
      />
    </div>
  )
}
export default LineChart
