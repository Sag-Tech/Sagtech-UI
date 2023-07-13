import { type StoryFn, type Meta } from '@storybook/react'
import TestimonialCard from './TestimonialCard'

export default {
  title: 'CardWrapper/TestimonialCard',
  component: TestimonialCard
} satisfies Meta

const Template: StoryFn = (arg) => <TestimonialCard {...arg} />

export const Default = Template.bind({})
Default.args = {
  title: 'Sergey Chervyakov',
  description: '"I\'ve collaborated with Sagtech on several projects, and I couldn\'t be happier with the quality of their work. They consistently deliver on time, and their responsiveness is unmatched. The developers are not only talented but also incredibly easy to work with."',
  user: 'user1',
  role: 'CEO of Kwikwins'
}
