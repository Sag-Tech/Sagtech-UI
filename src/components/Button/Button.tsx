import React, { type MouseEventHandler, useMemo, type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react'
import '../../styles/globals.css'
import { Icon } from '@components/IconComponent/Icon'
import useButtonStyles from './useButtonStyles/useButtonStyles'
import { type VariantTypoTagsStyles } from '@components/Typo/types'
import Typography from '@components/Typo/Typography'

export interface ButtonTypes extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  loadingType?: boolean
  text?: string
  buttonSize?: 'small' | 'large' | 'tabSize'
  variant?: 'primary' | 'secondary' | 'tabButton'
  useIcon?: boolean
  stateOfButton?: 'default' | 'active'
  classes?: string
  hoverOff?: boolean
  changeColor?: boolean
  children?: React.ReactNode
  typeText?: VariantTypoTagsStyles
  onClick?: MouseEventHandler
}

const Button: React.FC<ButtonTypes> = ({
  text,
  disabled,
  buttonSize = 'large',
  loadingType,
  classes,
  variant,
  useIcon,
  stateOfButton = 'default',
  hoverOff,
  children,
  changeColor,
  typeText = 'Buttons',
  onClick,
  ...rest
}) => {
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
      return (
        <Icon
          icon={!loadingType ? 'project' : 'loading'}
          size={buttonSize === 'small' ? 18 : 24}
        />
      )
    }
    return null
  }, [useIcon, loadingType, buttonSize])

  return (
  <button
      type="button"
      className={`${classes !== undefined ? classes : ''} ${buttonClasses}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
      {iconComponent}
      <Typography
        type={typeText}
        color="text-white"
        className="hidde-paragraph"
      >
        {text}
      </Typography>
    </button>
  )
}

export default Button
