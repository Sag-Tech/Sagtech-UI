import { type Meta, type StoryFn } from '@storybook/react'
import { SelectComponent } from './SelectComponent'
import { useState } from 'react'

const meta: Meta<typeof SelectComponent> = {
  title: 'Select',
  component: SelectComponent
}

export default meta

const Selectstory: StoryFn = (arg) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = (): void => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)
  }

  return <SelectComponent {...arg} isMenuOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
}

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

export const SelectDefault = Selectstory.bind({})

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
