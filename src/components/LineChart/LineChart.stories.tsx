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
  series: [
    {
      name: 'employees',
      data: [
        {
          x: '07/10/2022',
          y: 6
        },
        {
          x: '09/15/2022',
          y: 14
        },
        {
          x: '12/20/2022',
          y: 10
        },
        {
          x: '03/10/2023',
          y: 17
        },
        {
          x: '05/06/2023',
          y: 14
        },
        {
          x: '07/07/2023',
          y: 20
        }
      ]
    },
    {
      name: 'projects',
      data: [
        {
          x: '07/10/2022',
          y: 9
        },
        {
          x: '08/15/2022',
          y: 13
        },
        {
          x: '10/03/2022',
          y: 11
        },
        {
          x: '12/20/2022',
          y: 16
        },
        {
          x: '03/10/2023',
          y: 9
        },
        {
          x: '05/06/2023',
          y: 15
        },
        {
          x: '07/07/2023',
          y: 11
        }
      ]
    },
    {
      name: 'clients',
      data: [
        {
          x: '07/10/2022',
          y: 11
        },
        {
          x: '10/15/2022',
          y: 14
        },
        {
          x: '12/30/2022',
          y: 20
        },
        {
          x: '04/10/2023',
          y: 9
        },
        {
          x: '07/06/2023',
          y: 20
        }
      ]
    }
  ]
}
