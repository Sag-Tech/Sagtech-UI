import classNames from 'classnames'
import React from 'react'
import typographyConst from './TypographyConst/TypographyConst'

interface TypographyTypes {
  text?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p'
  type?: 'Body L' | 'Body S' | 'Labels' | 'Info' | 'Buttons'
  color?: 'text-black_1' | 'text-black_2' | 'text-black_3' | 'text-black_4' | 'text-grey_1' | 'text-grey_2' | 'text-grey_3' | 'text-grey_4' | 'text-white_1' | 'text-white_2' | 'text-white_3' | 'text-white_4' | 'text-white' | 'text-pr_purple' | 'text-sec_purple' | 'text-pr_blue' | 'text-sec_blue' | 'text-error' | 'text-warning' | 'text-success'
}

const Typography: React.FC<TypographyTypes> = ({ text, tag: ElementTag = 'p' as keyof JSX.IntrinsicElements, type = 'Body L', color = 'text-black_1' }) => {
  const tagDefault = ElementTag === 'p'
  const fontClasses = classNames({
    [typographyConst.h1]: ElementTag === 'h1',
    [typographyConst.h2]: ElementTag === 'h2',
    [typographyConst.h3]: ElementTag === 'h3',
    [typographyConst.h4]: ElementTag === 'h4',
    [typographyConst.bodyL]: type === 'Body L' && tagDefault,
    [typographyConst.bodyS]: type === 'Body S' && tagDefault,
    [typographyConst.labels]: type === 'Labels' && tagDefault,
    [typographyConst.info]: type === 'Info' && tagDefault,
    [typographyConst.buttons]: type === 'Buttons' && tagDefault,
    [color]: true
  })

  return (
    <ElementTag
      className={`${fontClasses}`}
    >
        {text}
    </ElementTag>
  )
}
export default Typography
