import classNames from 'classnames'
import React from 'react'
import typographyConst from './TypographyConst/TypographyConst'

interface TypographyTypes {
  text?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p'
  type?: 'Body L' | 'Body S' | 'Labels' | 'Info' | 'Buttons'
}
const color = 'text-black_1'

const Typography: React.FC<TypographyTypes> = ({ text, tag: ElementTag = 'p' as keyof JSX.IntrinsicElements, type = 'Body L' }) => {
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
    [typographyConst.buttons]: type === 'Buttons' && tagDefault
  })

  return (
    <ElementTag
        className={`${fontClasses} ${color}`}
    >
        {text}
    </ElementTag>
  )
}
export default Typography
