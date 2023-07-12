import { type StoryFn, type Meta } from '@storybook/react'
import CardWrapper from './CardWrapper'

export default {
  title: 'CardWrapper',
  component: CardWrapper
} satisfies Meta

const Template: StoryFn = (arg) => <CardWrapper icon='time' {...arg} />

export const AdvantagesPill = Template.bind({})
AdvantagesPill.args = {
  title: 'Warp-Speed Efficiency',
  description: 'Our galactic alliance has no time for bureaucracy. ve incinerated red tape, propelling us to develop faster and more effectively than ever before!',
  icon: 'time'
}
