import classNames from 'classnames'
import React from 'react'
import Typography from 'src/styles/Fonts/variable'
import FontConst from './FontConst/FontConst'

interface FontTypes {
  text?: string
  type?: 'H1' | 'H2' | 'H3' | 'H4' | 'Body L' | 'Body S' | 'Labels' | 'Info' | 'Buttons'
}

const color = 'text-black_1'

const Font: React.FC<FontTypes> = ({ text, type }) => {
  const fontClasses = classNames({
    [FontConst.h1]: type === 'H1',
    [FontConst.h2]: type === 'H2',
    [FontConst.h3]: type === 'H3',
    [FontConst.h4]: type === 'H4',
    [FontConst.bodyL]: type === 'Body L',
    [FontConst.bodyS]: type === 'Body S',
    [FontConst.labels]: type === 'Labels',
    [FontConst.info]: type === 'Info',
    [FontConst.buttons]: type === 'Buttons'
  })

  let as: keyof JSX.IntrinsicElements = 'p'
  if (type === 'H1') {
    as = 'h1'
  } else if (type === 'H2') {
    as = 'h2'
  } else if (type === 'H3') {
    as = 'h3'
  } else if (type === 'H4') {
    as = 'h4'
  }

  return (
    <Typography
        as={as}
        addClass={`${fontClasses} ${color}`}
    >
        {text}
    </Typography>
  )
}
export default Font
