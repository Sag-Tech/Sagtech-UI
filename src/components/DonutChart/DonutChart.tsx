import React from 'react'
import Chart from 'react-apexcharts'
import { options } from './DonutChartConst/DonutChartConst'

interface DonutChartTypes {
  value?: number[]
}
const DonutChart: React.FC<DonutChartTypes> = ({ value = [50, 50, 25, 50, 25] }) => {
  const series = value

  return (
    <div data-tid="DonutChart">
      <Chart
        options={options}
        series={series}
        type="donut"
        width='100%'
      />
    </div>
  )
}
export default DonutChart
