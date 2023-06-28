import { type Meta, type StoryFn } from '@storybook/react'

import AnimationButton from './AnimationButton'

export default {
  title: 'Animate Buttons',
  component: AnimationButton
} satisfies Meta

const Template: StoryFn = (arg) => <AnimationButton {...arg}/>

export const Animate = Template.bind({})

Animate.args = {
  text: 'Animate button'
}
