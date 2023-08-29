import type { StoryFn, Meta } from '@storybook/react'
import AnimationButton from './AnimationButton'

const meta: Meta<typeof AnimationButton> = {
  title: 'Animate Buttons',
  component: AnimationButton
}

export default meta

const Template: StoryFn = (arg) => <AnimationButton {...arg}/>

export const Animate = Template.bind({})

Animate.args = {
  text: 'View the project'
}
