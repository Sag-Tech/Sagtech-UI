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
  value: [50, 50, 25, 50, 25]
}

export const Primary = Template.bind({})
Primary.args = {
  value: [5, 10, 25, 40, 5]
}
