import { type Meta, type StoryFn } from '@storybook/react'
import Modal from './Modal'

export default {
  title: 'Modal types',
  component: Modal
} satisfies Meta

const ModalDefault: StoryFn = (arg) => <Modal {...arg}/>

export const ModalWindow = ModalDefault.bind({})

ModalWindow.args = {
  isOpen: true
}
