import { type VariantTypoTagsStyles } from '@components/Typo/types'
import Typography from '@components/Typo/Typography'
import classnames from 'classnames'
import React from 'react'
import type {
  VariantTypoColorsText,
  VariantTypoColorsCircle,
  VariantTypoIconName
} from './types'

interface PointTypes {
  text?: string
  type?: VariantTypoTagsStyles
  textColor?: VariantTypoColorsText
  circleColor?: VariantTypoColorsCircle
  styles?: string
  iconName?: VariantTypoIconName
  icon?: boolean
}
const Point: React.FC<PointTypes> = ({
  text,
  type,
  textColor,
  circleColor = 'bg-pr_purple',
  styles,
  icon = true,
  iconName = 'users'
}) => {
  return (
    <div
      className={classnames('flex items-center gap-8px', styles)}
      data-tid="point"
    >
      {icon && (
        <img
          width={18}
          height={18}
          src={`/svg/icons/${iconName}.svg`}
          alt={iconName}
        />
      )}
      {!icon && (
        <div
          className={classnames('h-[8px] w-[8px] rounded-circle', circleColor)}
          data-tid="circle"
        />
      )}
      <Typography
        type={type}
        color={textColor}
        className="max-w-[40vw] truncate sm:max-w-[30vw]"
      >
        {text}
      </Typography>
    </div>
  )
}
export default Point
