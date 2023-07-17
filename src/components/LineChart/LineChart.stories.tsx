import { type StoryFn, type Meta } from '@storybook/react'
import LineChart from './LineChart'

const meta: Meta<typeof LineChart> = {
  title: 'LineChart',
  component: LineChart
}

export default meta

const Template: StoryFn = (arg) => <LineChart {...arg} />

export const Default = Template.bind({})
Default.args = {
}
