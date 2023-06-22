import React from 'react'

import '../../styles/tailwind.css'

import { Icon } from '@components/IconComponent/Icon'

interface ButtonTypes {
  type?: 'submit' | 'button'
  disabled?: boolean
  loadingType?: boolean
  onClick?: () => void
  children?: React.ReactNode
  buttonSize?: 'small' | 'large' | 'tabSize'
  variant?: 'primary' | 'secondary' | 'tabButton'
  useIcon?: boolean
  stateOfButton?: 'default' | 'active'
}

const Button: React.FC<ButtonTypes> = ({ children, disabled, buttonSize, loadingType, variant, useIcon, stateOfButton, ...rest }) => {
  const loadingCheck = loadingType === true
  const basicStyles = 'leading-24 flex justify-center items-center gap-8px  font-bold rounded-[16px] font-["Manrope"]   '
  const primaryButton = 'border-black_1 border-solid  bg-pr_purple   text-white  transition-all duration-800 '
  const tabButtonBase = 'leading-24 flex justify-center items-center gap-8px text-14 font-["Manrope"] px-16px py-8px rounded-[50px] transition-all duration-800'
  const tabButtonDefault = `${stateOfButton === 'default' ? 'text-grey_4  border-[1px] border-solid border-grey_4 rounded-[50px] transition-all duration-800' : ''}`
  const tabButtonActive = `${stateOfButton === 'active' ? 'bg-pr_purple border-none text-white_4' : ''}`
  const tabButtonDisabled = 'disabled:border-grey_2 disabled:text-grey_2'
  const smallSize = 'py-4px px-16px text-14 rounded-[50px]'
  const largeSize = 'py-16px px-40px text-16 '
  const hoverAnimation = `${buttonSize === 'large' && disabled === false && variant === 'primary' && !loadingCheck ? 'hover:border-[6px] hover:border-solid hover:border-black_1 hover:shadow-3xl hover:transition-all hover:duration-300' : ''}`
  const primaryDisabledStyles = 'disabled:bg-[#545259] disabled:text-grey_2'
  const secondaryDisabledStyles = 'disabled:border-grey_2 disabled:text-grey_2'
  const loadingPrimary = 'bg-[#545259] text-grey_2'
  const loadingSecondary = 'border-grey_2 text-grey_2'
  const secondaryButton = 'border-[2px] border-solid border-white bg-none  text-white'
  const primaryCheck = variant === 'primary'
  const secondaryCheck = variant === 'secondary'
  const tabButtonCheck = variant === 'tabButton'
  const tabButtonHover = `${tabButtonCheck ? 'hover:border-white_4 hover:text-white_4 hover:transition-all hover:duration-800' : ''}`
  const secondaryAnimation = `${secondaryCheck && buttonSize === 'large' && disabled === false && !loadingCheck ? 'hover:drop-shadow-3xl' : ''}`
  const allclasses = `
  ${tabButtonCheck ? tabButtonActive : ''}
  ${tabButtonCheck ? tabButtonDefault : ''}
  ${variant === 'primary' && !loadingCheck ? primaryButton : ''}
  ${tabButtonCheck ? tabButtonBase : ''}
  ${hoverAnimation}
  ${tabButtonHover}
  ${secondaryAnimation}
  ${!tabButtonCheck ? basicStyles : ''}
  ${primaryCheck ? primaryDisabledStyles : ''}
  ${primaryCheck && loadingCheck ? loadingPrimary : ''}
  ${tabButtonCheck ? tabButtonDisabled : ''}
  ${secondaryCheck && disabled === true ? secondaryDisabledStyles : ''}
  ${secondaryCheck && loadingCheck ? loadingSecondary : ''}
  ${buttonSize === 'small' ? smallSize : ''}
  ${buttonSize === 'large' ? largeSize : ''}
  ${secondaryCheck && !loadingCheck ? secondaryButton : ''}
 `
  return (
        <button type='button' disabled={disabled}
         className={allclasses} {...rest} >
          {useIcon === true && <Icon icon={loadingCheck ? 'loading' : 'project'} size={buttonSize === 'small' && !loadingCheck ? 18 : undefined}/>}
            {children}
        </button>
  )
}

export default Button
