import { type Meta, type StoryFn } from '@storybook/react'
import TextArea from './TextArea'

export default {
  title: 'Textarea types',
  component: TextArea
} satisfies Meta

const DefaultTextArea: StoryFn = (arg) => <TextArea {...arg}/>

export const TextAreaDefault = DefaultTextArea.bind({})

TextAreaDefault.args = {
  state: 'default',
  value: 'Text here, please...',
  classes: 'h-[168px]',
  disabled: false
}

const ActiveTextArea: StoryFn = (arg) => <TextArea {...arg}/>

export const TextAreaActive = ActiveTextArea.bind({})

TextAreaActive.args = {
  state: 'active',
  value: 'Text here, please...',
  classes: 'h-[168px]',
  disabled: false
}

const ErrorTextArea: StoryFn = (arg) => <TextArea {...arg}/>

export const TextAreaError = ErrorTextArea.bind({})

TextAreaError.args = {
  state: 'error',
  value: 'Text here, please...',
  classes: 'h-[168px]',
  disabled: false,
  errorMessage: 'Error message'
}
