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
  min: 5,
  max: 20,
  tickAmountX: 4,
  height: 243,
  series: [
    {
      name: 'employees',
      data: [
        {
          x: 'q1',
          y: 6
        },
        {
          x: 'q2',
          y: 14
        }
      ]
    },
    {
      name: 'projects',
      data: [
        {
          x: 'q1',
          y: 9
        },
        {
          x: 'w2',
          y: 13
        }
      ]
    }
  ]
}
