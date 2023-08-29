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
    <div
      data-tid="modal"
      className="fixed z-[200] flex w-full justify-center tall:h-full"
    >
      <div
        onClick={toggle}
        onKeyDown={handleKeyDown}
        role="button"
        className="fixed left-0px top-0px z-[200] h-full w-full bg-backdrop"
        tabIndex={0}
        aria-label="Close modal"
      />
      <div className="modalAnim z-[300] mx-8px mt-[96px] inline-flex w-full rounded-24px border-[1px] border-solid border-black_3 bg-black_1 p-24px shadow-4xl  xs:mt-[80px] xs:w-[454px] xs:p-32px sm:mt-[64px]  sm:rounded-40px xl:mt-[120px] tall:overflow-y-scroll">
        <div className="w-full">{children}</div>
      </div>
    </div>
  )
}

export default Modal
