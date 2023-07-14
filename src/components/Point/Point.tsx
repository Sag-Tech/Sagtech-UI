import Typography from '@components/Typo/Typography'
import classnames from 'classnames'
import React from 'react'
import type { VariantTypoColors, VariantTypoTagsStyles } from './types'

interface PointTypes {
  text?: string
  type?: VariantTypoTagsStyles
  color?: VariantTypoColors
  styles?: string
  children?: React.ReactNode
}
const Point: React.FC<PointTypes> = ({ text, type, color, styles, children }) => {
  return (
    <div className={classnames(
      'flex items-center gap-8px',
      styles
    )}
      data-testid="point"
    >
      {children}
      <Typography type={type} text={text} color={color} />
    </div>
  )
}
export default Point
