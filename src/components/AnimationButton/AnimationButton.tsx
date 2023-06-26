import React from 'react'
import '../../styles/tailwind.css'
import { Icon } from '@components/IconComponent/Icon'

interface AnimateType {
  children?: React.ReactNode
  type?: 'submit' | 'button'
}

const AnimationButton: React.FC<AnimateType> = ({ children }) => {
  return (
    <button
      className='inline-flex gg bg-pr_purple  px-8px py-8px items-center rounded-circle'
    >
      <span
        className='text-white element font-["Manrope"] font-bold text-16 leading-24 '
      >
        {children}
      </span>
      <div>
      <Icon icon='arrow' size={32} viewBox='0 0 32 32' color='#6D3EF1' />
      </div>
    </button>
  )
}

export default AnimationButton
