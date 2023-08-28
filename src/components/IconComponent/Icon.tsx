/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React from 'react'
import type { SVGProps } from 'react'
import { content } from '../../assets/icons'
import type { IAvailableIcons } from '../../assets/icons'
import Typography from '@components/Typo/Typography'

export interface IIconProps {
  svgProps?: SVGProps<SVGSVGElement>
  icon: IAvailableIcons
  size?: number
  height?: number
  color?: string
  viewBox?: string
  className?: string
  text?: string
  classes?: string
}

export const Icon: React.FC<IIconProps> = ({
  icon,
  size = 24,
  color = '#fff',
  height,
  className,
  classes,
  svgProps = {},
  text,
  ...rest
}) => {
  const IconComponent = (): React.ReactElement => {
    const Component = content[icon] as React.FC<React.SVGProps<SVGSVGElement>>
    return (
      <div className={`flex flex-col items-center ${classes !== undefined ? classes : ''}`}>
      <Component
        viewBox="0 0 24 24"
        width={size}
        className={className}
        height={height || size}
        color={color}
        {...svgProps}
        {...rest}
        fill="none"
      />
      {text && (
        <div className="mt-4px 2xl:mt-0px">
          <Typography type="BodyS" color="text-grey_4">
            {text}
          </Typography>
        </div>
      )}
    </div>
    )
  }

  return <IconComponent />
}
