import { type Meta, type StoryFn } from '@storybook/react'
import Input from './Input'

export default {
  title: 'Inputs types',
  component: Input
} satisfies Meta

const DefaultInput: StoryFn = (arg) => <Input placeholder='Enter your email' {...arg}/>

export const InputDefault = DefaultInput.bind({})

InputDefault.args = {
  label: 'label',
  disabled: false,
  errorMessage: 'Error text',
  state: 'default'
}

const ErrorInput: StoryFn = (arg) => <Input placeholder='Enter your email' {...arg}/>

export const InputsError = ErrorInput.bind({})

InputsError.args = {
  label: 'label',
  disabled: false,
  errorMessage: 'Error text',
  isError: true
}

const ActiveInput: StoryFn = (arg) => <Input placeholder='Enter your email' {...arg}/>

export const InputActive = ActiveInput.bind({})

InputActive.args = {
  label: 'label',
  disabled: false,
  errorMessage: 'Error text',
  state: 'active'
}
