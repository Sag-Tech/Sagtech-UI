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
  text: 'Button',
  buttonSize: 'large',
  type: 'button',
  disabled: false,
  loadingType: false,
  useIcon: true
}

const secondTemplate: StoryFn = (arg) => <Button {...arg}/>

export const Secondary = secondTemplate.bind({})

Secondary.args = {
  variant: 'secondary',
  text: 'Button',
  buttonSize: 'large',
  type: 'button',
  disabled: false,
  loadingType: false,
  useIcon: true
}

const thirdTemplate: StoryFn = (arg) => <Button {...arg}/>

export const Tab = thirdTemplate.bind({})

Tab.args = {
  variant: 'tabButton',
  text: 'Button',
  buttonSize: 'tabSize',
  type: 'button',
  disabled: false,
  stateOfButton: 'default',
  loadingType: false
}
