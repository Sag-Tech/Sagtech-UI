import { type Meta, type StoryFn } from '@storybook/react'
import Modal from './Modal'
import { ModalContext, ModalContextProvider } from 'src/context/ModalContext'
import { useContext } from 'react'

export default {
  title: 'Modal types',
  component: Modal,
  decorators: [(Story) => {
    return <ModalContextProvider><Story /></ModalContextProvider>
  }]
} satisfies Meta

const ModalDefault: StoryFn = (arg) => {
  const { isOpen, toggle } = useContext(ModalContext)
  return (
    <>
     <Modal isOpen={isOpen} toggle={toggle} {...arg}/>
     <button onClick={toggle}>Open Modal</button>
    </>
  )
}

export const ModalWindow = ModalDefault.bind({})

ModalWindow.args = {
}
