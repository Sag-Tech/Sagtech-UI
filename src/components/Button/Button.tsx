import React, { useMemo, type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react'
import '../../styles/globals.css'
import { Icon } from '@components/IconComponent/Icon'
import buttonConst from './ButtonConst/ButtonConst'
import classNames from 'classnames'

interface ButtonTypes extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  loadingType?: boolean
  text?: string
  buttonSize?: 'small' | 'large' | 'tabSize'
  variant?: 'primary' | 'secondary' | 'tabButton'
  useIcon?: boolean
  stateOfButton?: 'default' | 'active'
}

const Button: React.FC<ButtonTypes> = ({ text = 'button', disabled, buttonSize, loadingType, variant, useIcon, stateOfButton, ...rest }) => {
  const buttonClasses = classNames({
    [buttonConst.tabButtonActive]: variant === 'tabButton' && stateOfButton === 'active' && !(disabled ?? false),
    [buttonConst.tabButtonDefault]: variant === 'tabButton' && stateOfButton === 'default' && !(disabled ?? false),
    [buttonConst.primaryButton]: variant === 'primary' && loadingType !== true,
    [buttonConst.tabButtonBase]: variant === 'tabButton',
    [buttonConst.secondaryButton]: variant === 'secondary' && loadingType !== true,
    [buttonConst.hoverAnimation]: buttonSize === 'large' && !(disabled ?? false) && variant === 'primary' && loadingType !== true,
    [buttonConst.secondaryAnimation]: variant === 'secondary' && buttonSize === 'large' && !(disabled ?? false) && loadingType !== true,
    [buttonConst.tabButtonHover]: variant === 'tabButton',
    [buttonConst.basicStyles]: variant !== 'tabButton',
    [buttonConst.primaryDisabledStyles]: variant === 'primary',
    [buttonConst.loadingPrimary]: variant === 'primary' && loadingType,
    [buttonConst.tabButtonDisabled]: variant === 'tabButton' && disabled,
    [buttonConst.secondaryDisabledStyles]: variant === 'secondary' && disabled,
    [buttonConst.loadingSecondary]: variant === 'secondary' && loadingType,
    [buttonConst.smallSize]: buttonSize === 'small',
    [buttonConst.largeSize]: buttonSize === 'large'
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
