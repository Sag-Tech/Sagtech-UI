import { type StoryFn, type Meta } from '@storybook/react'
import AdvantagesCard from './AdvantagesCard'

const meta: Meta<typeof AdvantagesCard> = {
  title: 'CardWrapper/AdvantagesCard',
  component: AdvantagesCard
}

export default meta

const Template: StoryFn = (arg) => <AdvantagesCard {...arg} />

export const Default = Template.bind({})
Default.args = {
  title: 'Warp-Speed Efficiency',
  description: 'Our galactic alliance has no time for bureaucracy. We\'ve incinerated red tape, propelling us to develop faster and more effectively than ever before!',
  icon: 'time'
}
