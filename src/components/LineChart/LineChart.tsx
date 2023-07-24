import React from 'react'
import Chart from 'react-apexcharts'
import { getChartOptions } from './LineChartConst/LineChartConst'
import { type VariantType } from './types'

interface LineChartTypes {
  min?: number
  max?: number
  tickAmountX?: number
  type?: VariantType
  width?: number
  height?: number
  series?: Array<{
    name: string
    data: Array<{
      x: string
      y: number
    }>
  }>
}
const LineChart: React.FC<LineChartTypes> = ({ min = 0, max = 100, tickAmountX = 2, series, type = 'line', width = '100%', height = '100%' }) => {
  const options = getChartOptions(min, max, tickAmountX)
  return (
    <Chart
      options={options}
      series={series}
      type={type}
      width={width}
      height={height}
    />
  )
}
export default LineChart
