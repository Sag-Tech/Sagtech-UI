import classnames from 'classnames'
import React, { useMemo } from 'react'
import type { VariantTypoTagsStyles, VariantTypoColors, VariantTypoTags } from './types'
import typographyConst from './TypographyConst/TypographyConst'

export interface TypographyTypes {
  text?: string
  className?: string
  children?: React.ReactNode
  tag?: VariantTypoTags
  type?: VariantTypoTagsStyles
  color?: VariantTypoColors
}

export const Typography: React.FC<TypographyTypes> = ({
  children,
  text,
  className,
  tag = 'p',
  type = 'BodyL',
  color = 'text-white_1'
}) => {
  const tagDefault = tag === 'p'
  const Component = useMemo(() => tag, [tag])
  const classes = useMemo(
    () => classnames({
      [typographyConst.h1]: tag === 'h1',
      [typographyConst.h2]: tag === 'h2',
      [typographyConst.h3]: tag === 'h3',
      [typographyConst.h4]: tag === 'h4',
      [typographyConst.bodyL]: type === 'BodyL' && tagDefault,
      [typographyConst.bodyM]: type === 'BodyM' && tagDefault,
      [typographyConst.bodyS]: type === 'BodyS' && tagDefault,
      [typographyConst.labels]: type === 'Labels' && tagDefault,
      [typographyConst.labelsS]: type === 'LabelsS' && tagDefault,
      [typographyConst.info]: type === 'Info' && tagDefault,
      [typographyConst.infoBold]: type === 'InfoBold' && tagDefault,
      [typographyConst.buttons]: type === 'Buttons' && tagDefault,
      [typographyConst.buttonsS]: type === 'ButtonsS' && tagDefault,
      [typographyConst.buttonsSBold]: type === 'ButtonsSBold' && tagDefault,
      [color]: true
    }),
    [type, tag, tagDefault, color]
  )

  return (
    <Component
      className={`${classes} ${className !== undefined ? className : ''}`}
    >
      <>
        {text}
        {children}
      </>
    </Component>
  )
}
