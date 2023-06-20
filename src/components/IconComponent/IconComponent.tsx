import React from 'react'

import type { SVGProps } from 'react'

import content from '@assets/icons'

import type { IAvailableIcons } from '@assets/icons'

import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'

export interface IIconProps extends Partial<CustomIconComponentProps> {
  svgProps?: SVGProps<any>
  icon: IAvailableIcons
  size?: number
  color?: string
}

export const Icon: React.FC<IIconProps> = ({
  svgProps = {},
  icon,
  size = 24,
  color,
  ...rest
}) => {
  const IconComponent = (): React.ReactElement => {
    const Component = content[icon] as unknown as React.FC<React.SVGProps<SVGSVGElement>>
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
