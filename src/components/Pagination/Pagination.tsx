import React, { useState, type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react'

import '../../styles/tailwind.css'

import { Icon } from '@components/IconComponent/Icon'

import paginationConsts from './PaginationConst/PaginationConst'

import classNames from 'classnames'

interface PaginationType extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: React.ReactNode
  state?: 'default' | 'active' | 'disabled'
  arrowPosition?: 'left' | 'right'
}

const Pagination: React.FC<PaginationType> = ({
  children,
  state,
  disabled,
  arrowPosition,
  ...rest
}) => {
  const [hover, setHover] = useState(false)

  const mouseHandlerOver = (): void => {
    setHover(true)
  }

  const mouseHandlerLeave = (): void => {
    setHover(false)
  }

  const buttonStyles = classNames({
    [paginationConsts.defaultStyles]: state === 'default' && !(disabled ?? false),
    [paginationConsts.animation]: hover,
    [paginationConsts.activeStyles]: state === 'active' && !(disabled ?? false),
    [paginationConsts.disabledStyles]: disabled,
    [paginationConsts.basicStyles]: true
  })

  const iconColors = `
   ${hover ? '#F8F8F8' : ''} 
   ${state === 'default' && !(disabled ?? false) ? '#B5B5B9' : ''}
   ${state === 'active' && !(disabled ?? false) ? '#FFFFFF' : ''}
  `
  return (
    <button
      onMouseOver={state === 'default' ? mouseHandlerOver : undefined}
      onMouseLeave={state === 'default' ? mouseHandlerLeave : undefined}
      className={`${buttonStyles}`}
      disabled={disabled}
      {...rest}
    >
      <span className='w-[24px]'>{children}</span>
      <Icon icon='paginatioArrow' color={iconColors} className={`${arrowPosition === 'right' ? 'rotate-180' : ''}`} />
    </button>
  )
}

export default Pagination