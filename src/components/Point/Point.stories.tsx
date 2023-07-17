import { type StoryFn, type Meta } from '@storybook/react'
import Point from './Point'

const meta: Meta<typeof Point> = {
  title: 'Point',
  component: Point
}

export default meta

const Template: StoryFn = (arg) => <Point {...arg} />

export const Circle = Template.bind({})
Circle.args = {
  text: 'finTech',
  textColor: 'text-grey_4',
  type: 'Labels',
  icon: false,
  circleColor: 'bg-sec_blue'
}

export const Icon = Template.bind({})
Icon.args = {
  textColor: 'text-grey_4',
  text: '2 developers',
  type: 'BodyL',
  iconName: 'calendar'
}
