import React from 'react'

interface ModalProps {
  children?: React.ReactNode
  isOpen?: boolean
  toggle?: () => void
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, toggle }) => {
  if (!isOpen) {
    return null
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Escape' && typeof toggle === 'function') {
      toggle()
    }
  }

  return (
    <div className="fixed z-20 flex w-full justify-center">
    <div
      onClick={toggle}
      onKeyDown={handleKeyDown}
      role='button'
      className="fixed left-0px top-0px z-20 w-full h-full bg-backdrop"
      tabIndex={0}
      aria-label='Close modal'
    />
    <div className="border-[1px] border-solid border-black_3 modalAnim z-30 mt-[120px] inline-flex w-[454px]  shadow-4xl rounded-40px bg-black_1 p-8  sm:mx-2 sm:w-full sm:p-6">
      <div className="w-full">{children}</div>
    </div>
  </div>
  )
}

export default Modal
