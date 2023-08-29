import { type StoryFn, type Meta } from '@storybook/react'
import DonutChart from './DonutChart'

const meta: Meta<typeof DonutChart> = {
  title: 'DonutChart',
  component: DonutChart
}

export default meta

const Template: StoryFn = (arg) => <DonutChart {...arg} />

export const Default = Template.bind({})
Default.args = {
  value: [50, 50, 25, 50, 25],
  width: 300,
  colors: ['#6D3EF1', '#E7E2F8', '#CBBCF8', '#B69FF8', '#9271EE']
}

export const Primary = Template.bind({})
Primary.args = {
  value: [5, 10, 25, 40, 5],
  width: 300
}
