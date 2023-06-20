import React from 'react'

import '../../styles/tailwind.css'

interface ButtonTypes {
  type?: 'submit' | 'button'
  className?: string
  disabled?: boolean
  onClick?: () => void
  children?: React.ReactNode
  buttonSize?: 'small' | 'large'
  variant?: 'primary' | 'secondary'
}

const Button: React.FC<ButtonTypes> = ({ children, disabled, buttonSize, variant, ...rest }) => {
  const basicStyles = 'leading-24  text-white font-bold rounded-[16px] font-["Manrope"]  transition-all duration-800 '
  const primaryButton = 'bg-pr_purple'
  const smallSize = 'py-4px px-16px text-14'
  const largeSize = 'py-16px px-40px text-16 '
  const hoverAnimation = `${buttonSize === 'large' && disabled === false && variant === 'primary' ? 'hover:border-[6px] hover:border-solid hover:border-black_1 hover:transition-all hover:duration-800 ' : ''}`
  const primaryDisabledStyles = 'disabled:bg-[#545259] disabled:text-grey_2'
  const secondaryDisabledStyles = 'disabled:border-grey_2 disabled:text-grey_2'
  const secondaryButton = 'border-[2px] border-solid border-white bg-none '
  const primaryCheck = variant === 'primary'
  const secondaryCheck = variant === 'secondary'
  const secondaryAnimation = `${secondaryCheck && buttonSize === 'large' && disabled === false ? 'hover:drop-shadow-3xl hover:transition-all hover:duration-800' : ''}`

  const allclasses = `
  ${variant === 'primary' ? primaryButton : ''}
  ${hoverAnimation}
  ${secondaryAnimation}
  ${basicStyles}
  ${primaryCheck ? primaryDisabledStyles : ''}
  ${secondaryCheck && disabled === true ? secondaryDisabledStyles : ''}
  ${buttonSize === 'small' ? smallSize : largeSize}
  ${secondaryCheck ? secondaryButton : ''}
 `
  return (
        <button type='button' disabled={disabled}
         className={allclasses} {...rest} >
            {children}
        </button>
  )
}

export default Button
