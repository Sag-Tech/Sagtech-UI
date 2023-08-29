import React from 'react'
import Chart from 'react-apexcharts'
import { getChartOptions } from './DonutChartConst/DonutChartConst'
import { type VariantType } from './types'

interface DonutChartTypes {
  value?: number[]
  width?: number | string
  type?: VariantType
  colors?: string[]
  size?: number
}
export const DonutChart: React.FC<DonutChartTypes> = ({
  value = [100],
  width = '100%',
  type = 'donut',
  colors = [],
  size = 8
}) => {
  const series = value
  const options = getChartOptions(colors, size)

  return (
    <div data-tid="DonutChart">
      <Chart
        options={options}
        series={series}
        type={type}
        width={width}
      />
    </div>
  )
}
