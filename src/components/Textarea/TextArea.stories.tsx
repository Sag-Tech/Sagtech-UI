import { type Meta, type StoryFn } from '@storybook/react'
import TextArea from './TextArea'

export default {
  title: 'Textarea types',
  component: TextArea
} satisfies Meta

const DefaultTextArea: StoryFn = (arg) => <TextArea placeholder='Text here, please...' {...arg}/>

export const TextAreaDefault = DefaultTextArea.bind({})

TextAreaDefault.args = {
  state: 'default',
  classes: 'h-[168px]',
  disabled: false
}

const ActiveTextArea: StoryFn = (arg) => <TextArea placeholder='Text here, please...' {...arg}/>

export const TextAreaActive = ActiveTextArea.bind({})

TextAreaActive.args = {
  state: 'active',
  classes: 'h-[168px]',
  disabled: false
}

const ErrorTextArea: StoryFn = (arg) => <TextArea placeholder='Text here, please...' {...arg}/>

export const TextAreaError = ErrorTextArea.bind({})

TextAreaError.args = {
  state: 'error',
  classes: 'h-[168px]',
  disabled: false,
  errorMessage: 'Error message'
}
