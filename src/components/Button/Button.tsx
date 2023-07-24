import React, { useMemo, type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react'
import '../../styles/globals.css'
import { Icon } from '@components/IconComponent/Icon'
import useButtonStyles from './useButtonStyles/useButtonStyles'

export interface ButtonTypes extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  loadingType?: boolean
  text?: string
  buttonSize?: 'small' | 'large' | 'tabSize'
  variant?: 'primary' | 'secondary' | 'tabButton'
  useIcon?: boolean
  stateOfButton?: 'default' | 'active'
  hoverOff?: boolean
  changeColor?: boolean
}

const Button: React.FC<ButtonTypes> = ({ text = 'button', disabled, hoverOff, changeColor, buttonSize, loadingType, variant, useIcon, stateOfButton, ...rest }) => {
  const buttonClasses = useButtonStyles({
    variant,
    stateOfButton,
    disabled,
    loadingType,
    changeColor,
    buttonSize,
    hoverOff
  })

  const iconComponent = useMemo(() => {
    if (useIcon) {
      return <Icon icon={ !loadingType ? 'project' : 'loading'} size={buttonSize === 'small' ? 18 : undefined} />
    }
    return null
  }, [useIcon, loadingType, buttonSize])

  return (
        <button className={buttonClasses} disabled={disabled} {...rest} >
            {iconComponent}
            {text}
        </button>
  )
}

export default Button
