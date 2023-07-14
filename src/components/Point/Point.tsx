import Typography from '@components/Typo/Typography'
import classnames from 'classnames'
import React from 'react'
import type { VariantTypoColorsText, VariantTypoTagsStyles, VariantTypoColorsCircle, VariantTypoIconName } from './types'

interface PointTypes {
  text?: string
  type?: VariantTypoTagsStyles
  textColor?: VariantTypoColorsText
  circleColor?: VariantTypoColorsCircle
  styles?: string
  iconName?: VariantTypoIconName
  icon?: boolean
}
const Point: React.FC<PointTypes> = ({ text, type, textColor, circleColor = 'bg-pr_purple', styles, icon = true, iconName = 'users' }) => {
  return (
    <div className={classnames(
      'flex items-center gap-8px',
      styles
    )}
      data-tid="point"
    >
      {icon && (<img width={15} height={13.5} src={`/svg/icons/${iconName}.svg`} alt={iconName} />)}
      {!icon && (
        <div className={classnames(
          'w-[8px] h-[8px] rounded-circle',
          circleColor
        )}
          data-tid="circle"
        />
      )}
      <Typography type={type} text={text} color={textColor} />
    </div>
  )
}
export default Point
