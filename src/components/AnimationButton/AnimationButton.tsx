import React, { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react'
import '../../styles/globals.css'
import { Icon } from '@components/IconComponent/Icon'

interface AnimateType extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text?: string
}

const AnimationButton: React.FC<AnimateType> = ({ text }) => {
  return (
   <div className='inline-block'>
      <button
      className='buttonAnim  bg-pr_purple  px-2 py-2 items-center rounded-circle buttonAnims overflow-hidden'
    >
      <span
        className='text-white  whitespace-nowrap animation font-["Manrope"] font-bold text-base pr-4'
      >
        {text}
      </span>
      <div className='iconStyles'>
      <Icon icon='arrow' size={32} viewBox='0 0 32 32' color='#6D3EF1' />
      </div>
    </button>
   </div>
  )
}

export default AnimationButton
