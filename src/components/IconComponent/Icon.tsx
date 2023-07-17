import React from 'react'
import type { SVGProps } from 'react'
import { content } from '../../assets/icons'
import type { IAvailableIcons } from '../../assets/icons'

export interface IIconProps {
  svgProps?: SVGProps<SVGSVGElement>
  icon: IAvailableIcons
  size?: number
  color?: string
  viewBox?: string
  className?: string
}

export const Icon: React.FC<IIconProps> = ({
  svgProps = {},
  icon,
  size = 24,
  color,
  ...rest
}) => {
  const IconComponent = (): React.ReactElement => {
    const Component = content[icon] as React.FC<React.SVGProps<SVGSVGElement>>
    return (
        <Component
          viewBox={'0 0 24 24'}
          width={size}
          height={size}
          color={color}
          {...rest}
          fill={'none'}
          {...svgProps}
        />
    )
  }

  return <IconComponent />
}
