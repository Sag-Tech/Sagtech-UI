import { type Meta, type StoryFn } from '@storybook/react'
import Attachment from './Attachment'

export default {
  title: 'Attachment',
  component: Attachment
} satisfies Meta

const AttachmentStory: StoryFn = (arg) => <Attachment {...arg}/>

export const AttachDefault = AttachmentStory.bind({})

AttachDefault.args = {
  type: 'file',
  state: 'default',
  accept: '.png, .jpg, .pdf, .gif'
}

const AttachmentStoryActive: StoryFn = (arg) => <Attachment {...arg}/>

export const AttachActive = AttachmentStoryActive.bind({})

AttachActive.args = {
  type: 'file',
  state: 'active',
  accept: '.png, .jpg, .pdf, .gif'
}

const AttachmentStoryError: StoryFn = (arg) => <Attachment {...arg}/>

export const AttachError = AttachmentStoryError.bind({})

AttachError.args = {
  type: 'file',
  state: 'error',
  accept: '.png, .jpg, .pdf, .gif'
}

export const AttachDisabled = AttachmentStory.bind({})

AttachDisabled.args = {
  type: 'file',
  state: 'disabled',
  accept: '.png, .jpg, .pdf, .gif',
  disabled: true
}
