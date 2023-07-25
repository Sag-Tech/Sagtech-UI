import React, { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react'
import '../../styles/globals.css'
import { Icon } from '@components/IconComponent/Icon'

interface AnimateType extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text?: string
}

const AnimationButton: React.FC<AnimateType> = ({ text = 'Some txt', ...rest }) => {
  return (
   <div className='inline-block'>
      <button
      {...rest}
      className='buttonAnim  bg-pr_purple  items-center rounded-circle buttonAnims overflow-hidden'
    >
     <div className='flex items-center '>
     <span
        className='text-white  whitespace-nowrap animation font-["Manrope"] font-bold leading-24'
      >
        {text}
      </span>
      <div role='contentinfo' className='iconStyles'>
      <Icon icon='arrow' size={32} viewBox='0 0 32 32' color='#6D3EF1' />
      </div>
     </div>
    </button>
   </div>
  )
}

export default AnimationButton
