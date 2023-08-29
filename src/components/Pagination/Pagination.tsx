import React, {
  useState,
  type ButtonHTMLAttributes,
  type DetailedHTMLProps
} from 'react'
import '../../styles/globals.css'
import Icon from '../IconComponent/Icon'
import paginationConsts from './PaginationConst/PaginationConst'
import classNames from 'classnames'

interface PaginationType extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text?: string
  state?: 'default' | 'active' | 'disabled'
  arrowPosition?: 'left' | 'right'
}

const Pagination: React.FC<PaginationType> = ({
  text,
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
    [paginationConsts.defaultStyles]: state === 'default' && !disabled,
    [paginationConsts.animation]: hover,
    [paginationConsts.activeStyles]: state === 'active' && !disabled,
    [paginationConsts.disabledStyles]: disabled,
    [paginationConsts.basicStyles]: true
  })

  const iconColors = `
   ${hover ? '#F8F8F8' : ''} 
   ${state === 'default' && !disabled ? '#B5B5B9' : ''}
   ${state === 'active' && !disabled ? '#FFFFFF' : ''}
  `
  const mouseOver = state === 'default' ? mouseHandlerOver : null
  const mouseLeave = state === 'default' ? mouseHandlerLeave : null

  return (
    <button
      onMouseOver={mouseOver !== null ? mouseOver : undefined}
      onMouseLeave={mouseLeave !== null ? mouseLeave : undefined}
      className={`${buttonStyles}`}
      disabled={disabled}
      {...rest}
    >
      <span className="w-[24px]">{text}</span>
      <Icon
        icon="paginationArrow"
        color={iconColors}
        className={arrowPosition === 'right' ? 'rotate-180' : ''}
      />
    </button>
  )
}

export default Pagination
