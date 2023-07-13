import { type StoryFn, type Meta } from '@storybook/react'
import AdvantagesCard from '../AdvantagesCard/AdvantagesCard'
import TestimonialCard from '../TestimonialCard/TestimonialCard'
import CardWrapper from './CardWrapper'

export default {
  title: 'CardWrapper/CardWrapper',
  component: CardWrapper
} satisfies Meta

const Template: StoryFn = (arg) => <CardWrapper {...arg} />

export const Border24Stroke1 = Template.bind({})
Border24Stroke1.args = {
  stoke: '1',
  rounded: '24',
  className: 'py-64px px-48px'
}

export const Border40Stroke1 = Template.bind({})
Border40Stroke1.args = {
  stoke: '1',
  rounded: '40',
  className: 'py-64px px-48px'
}

export const Border24Stroke2 = Template.bind({})
Border24Stroke2.args = {
  stoke: '2',
  rounded: '24',
  className: 'py-64px px-48px'
}

export const Border40Stroke2 = Template.bind({})
Border40Stroke2.args = {
  stoke: '2',
  rounded: '40',
  className: 'py-64px px-48px'
}

export const AdvantagesCardDefault = Template.bind({})
AdvantagesCardDefault.args = {
  stoke: '1',
  rounded: '24',
  children: <AdvantagesCard title='Warp-Speed Efficiency' description={'Our galactic alliance has no time for bureaucracy. We\'ve incinerated red tape, propelling us to develop faster and more effectively than ever before!'} icon='time' />
}

export const TestimonialCardDefault = Template.bind({})
TestimonialCardDefault.args = {
  stoke: '1',
  rounded: '24',
  children: <TestimonialCard title='Sergey Chervyakov' description={'"I\'ve collaborated with Sagtech on several projects, and I couldn\'t be happier with the quality of their work. They consistently deliver on time, and their responsiveness is unmatched. The developers are not only talented but also incredibly easy to work with."'} user='user1' role='CEO of Kwikwins' />
}
