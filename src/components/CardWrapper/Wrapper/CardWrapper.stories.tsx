import type { StoryFn, Meta } from '@storybook/react'
import AdvantagesCard from '../AdvantagesCard/AdvantagesCard'
import { DefaultAdvantagesCard } from '../AdvantagesCard/AdvantagesCard.stories'
import TestimonialCard from '../TestimonialCard/TestimonialCard'
import { DefaultTestimonialCard } from '../TestimonialCard/TestimonialCard.stories'
import CardWrapper from './CardWrapper'

const meta: Meta<typeof CardWrapper> = {
  title: 'CardWrapper/CardWrapper',
  component: CardWrapper
}
export default meta

const Template: StoryFn = (arg) => <CardWrapper {...arg} />

export const TestimonialCardDefault = Template.bind({})
TestimonialCardDefault.args = {
  stoke: '1',
  rounded: '24',
  children: <TestimonialCard {...DefaultTestimonialCard.args} />
}

export const AdvantagesCardDefault = Template.bind({})
AdvantagesCardDefault.args = {
  stoke: '1',
  rounded: '24',
  children: <AdvantagesCard {...DefaultAdvantagesCard.args} />
}

export const Wrapper = Template.bind({})
Wrapper.args = {
  stoke: '1',
  rounded: '24',
  className: 'py-64px px-48px'
}
