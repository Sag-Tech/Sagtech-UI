import type { Meta, StoryFn } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Buttons',
  component: Button
}
export default meta

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
