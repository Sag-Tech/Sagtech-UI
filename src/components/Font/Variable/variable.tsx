import classNames from 'classnames'
import { type ReactNode } from 'react'

interface TypographyProps {
  as: keyof JSX.IntrinsicElements
  children: ReactNode
  addClass?: string
}
const Typography = ({
  as: CustomTag,
  children,
  addClass
}: TypographyProps): JSX.Element => {
  let fontClass
  const className = classNames(fontClass, addClass)
  return <CustomTag className={className}>{children}</CustomTag>
}
export default Typography
