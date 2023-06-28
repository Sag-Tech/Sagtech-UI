import { type Meta, type StoryFn } from '@storybook/react'

import SelectComponent from './SelectComponent'

export default {
  title: 'Select',
  component: SelectComponent
} satisfies Meta

const Selectstory: StoryFn = (arg) => <SelectComponent {...arg}/>

export const SelectError = Selectstory.bind({})

SelectError.args = {
  state: 'error',
  errorText: 'Error message',
  labelText: 'Label',
  disabled: false,
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
}

const SelectstoryDefault: StoryFn = (arg) => <SelectComponent {...arg}/>

export const SelectDefault = SelectstoryDefault.bind({})

SelectDefault.args = {
  state: 'default',
  errorText: 'Error message',
  labelText: 'Label',
  disabled: false,
  options: [
    { value: 'belarus', label: 'Belarus' },
    { value: 'brazil', label: 'Brazil', isDisabled: true },
    { value: 'agentina', label: 'Agentina' }
  ]
}
