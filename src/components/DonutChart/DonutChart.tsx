import React from 'react'
import Chart from 'react-apexcharts'
import { options } from './types'

interface DonutChartTypes {
  value?: number[]
}
const DonutChart: React.FC<DonutChartTypes> = ({ value = [50, 50, 25, 50, 25] }) => {
  const series = value

  return (
    <Chart
      options={options}
      series={series}
      type="donut"
      width='100%'
    />
  )
}
export default DonutChart
