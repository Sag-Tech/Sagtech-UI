import { type Meta, type StoryFn } from '@storybook/react'

import Button from './Button'

export default {
  title: 'Buttons',
  component: Button
} satisfies Meta

const Template: StoryFn = (arg) => <Button {...arg}/>

export const Primary = Template.bind({})

Primary.args = {
  variant: 'primary',
  children: 'Button',
  buttonSize: 'large',
  type: 'button',
  disabled: false
}

const nwW: StoryFn = (arg) => <Button {...arg}/>

export const Secondary = nwW.bind({})

Secondary.args = {
  variant: 'secondary',
  children: 'Button',
  buttonSize: 'large',
  type: 'button',
  disabled: false
}
