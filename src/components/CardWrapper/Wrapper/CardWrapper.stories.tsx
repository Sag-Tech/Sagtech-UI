import type { StoryFn, Meta } from '@storybook/react'
import CardWrapper from './CardWrapper'

const meta: Meta<typeof CardWrapper> = {
  title: 'CardWrapper',
  component: CardWrapper
}
export default meta

const Template: StoryFn = (arg) => <CardWrapper {...arg} />

export const Wrapper = Template.bind({})
Wrapper.args = {
  stoke: '1',
  rounded: '24',
  className: 'py-64px px-48px'
}
