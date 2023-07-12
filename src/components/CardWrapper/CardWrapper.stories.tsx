import { type StoryFn, type Meta } from '@storybook/react'
import CardWrapper from './CardWrapper'

export default {
  title: 'CardWrapper',
  component: CardWrapper
} satisfies Meta

const Template: StoryFn = (arg) => <CardWrapper type= 'advantages' {...arg} />

export const AdvantagesPill = Template.bind({})
AdvantagesPill.args = {
  title: 'Warp-Speed Efficiency',
  description: 'Our galactic alliance has no time for bureaucracy. ve incinerated red tape, propelling us to develop faster and more effectively than ever before!',
  icon: 'time',
  type: 'advantages'
}

export const TestimonialCard = Template.bind({})
TestimonialCard.args = {
  title: 'Sergey Chervyakov',
  description: '"I\'ve collaborated with Sagtech on several projects, and I couldn\'t be happier with the quality of their work. They consistently deliver on time, and their responsiveness is unmatched. The developers are not only talented but also incredibly easy to work with."',
  user: 'user1',
  type: 'testimonial',
  role: 'CEO of Kwikwins'
}
