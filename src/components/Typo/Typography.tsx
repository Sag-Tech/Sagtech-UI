import classNames from 'classnames'
import React, { useMemo } from 'react'
import type { VariantTypoTagsStyles, VariantTypoColors, VariantTypoTags } from './types'
import typographyConst from './TypographyConst/TypographyConst'

export interface TypographyTypes {
  text?: string
  className?: string
  tag?: VariantTypoTags
  type?: VariantTypoTagsStyles
  color?: VariantTypoColors
}

const Typography: React.FC<TypographyTypes> = ({ text, tag = 'p', type = 'BodyL', className, color = 'text-white_1' }) => {
  const tagDefault = tag === 'p'
  const Component = useMemo(() => tag, [tag])
  const classes = useMemo(
    () =>
      classNames(
        {
          [typographyConst.h1]: tag === 'h1',
          [typographyConst.h2]: tag === 'h2',
          [typographyConst.h3]: tag === 'h3',
          [typographyConst.h4]: tag === 'h4',
          [typographyConst.bodyL]: type === 'BodyL' && tagDefault,
          [typographyConst.bodyS]: type === 'BodyS' && tagDefault,
          [typographyConst.labels]: type === 'Labels' && tagDefault,
          [typographyConst.info]: type === 'Info' && tagDefault,
          [typographyConst.buttons]: type === 'Buttons' && tagDefault,
          [color]: true
        }
      ),
    [
      type,
      tag,
      tagDefault,
      color
    ]
  )

  return (
    <Component
      className={`${classes} ${className !== undefined ? className : ''}`}
    >
        {text}
    </Component>
  )
}
export default Typography
