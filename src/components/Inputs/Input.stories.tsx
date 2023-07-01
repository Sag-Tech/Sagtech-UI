import { type Meta, type StoryFn } from '@storybook/react'
import Input from './Input'

export default {
  title: 'Inputs types',
  component: Input
} satisfies Meta

const DefaultInput: StoryFn = (arg) => <Input {...arg}/>

export const InputDefault = DefaultInput.bind({})

InputDefault.args = {
  value: 'Enter your email',
  disabled: false,
  errorMessage: 'Error text',
  state: 'default'
}

const ErrorInput: StoryFn = (arg) => <Input {...arg}/>

export const InputsError = ErrorInput.bind({})

InputsError.args = {
  value: 'Enter your email',
  disabled: false,
  errorMessage: 'Error text',
  state: 'error'
}

const ActiveInput: StoryFn = (arg) => <Input {...arg}/>

export const InputActive = ActiveInput.bind({})

InputActive.args = {
  value: 'Enter your email',
  disabled: false,
  errorMessage: 'Error text',
  state: 'active'
}
