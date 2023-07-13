import { type StoryFn, type Meta } from '@storybook/react'
import AdvantagesCard from './AdvantagesCard'

export default {
  title: 'CardWrapper/AdvantagesCard',
  component: AdvantagesCard
} satisfies Meta

const Template: StoryFn = (arg) => <AdvantagesCard {...arg} />

export const Default = Template.bind({})
Default.args = {
  title: 'Warp-Speed Efficiency',
  description: 'Our galactic alliance has no time for bureaucracy. We\'ve incinerated red tape, propelling us to develop faster and more effectively than ever before!',
  icon: 'time'
}
