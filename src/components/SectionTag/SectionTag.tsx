import classnames from 'classnames'
import React, { useMemo } from 'react'
import sectionTagConst from './SectionTagConst/SectionTagConst'
import { type VariantTypoSize } from './types'

interface CardWrapperTypes {
  className?: string
  size?: VariantTypoSize
  children?: React.ReactNode
}
const SectionTag: React.FC<CardWrapperTypes> = ({ className, size = 'small', children }) => {
  const classes = useMemo(
    () =>
      classnames(
        {
          [sectionTagConst.small]: size === 'small',
          [sectionTagConst.middle]: size === 'middle',
          [sectionTagConst.large]: size === 'large'
        }
      ),
    [size]
  )

  return (
    <div className={classnames(
      'w-full h-full border-1 border-solid border-pr_purple',
      className,
      classes
    )}
      data-testid="section-tag"
    >
          {children}
    </div>
  )
}
export default SectionTag
