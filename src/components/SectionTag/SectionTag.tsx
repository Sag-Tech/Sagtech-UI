import classNames from 'classnames'
import React, { useMemo } from 'react'
import sectionTagConst from './SectionTagConst/SectionTagConst'
import { type VariantTypoSize } from './types'

interface SectionTagTypes {
  className?: string
  size?: VariantTypoSize
  children?: React.ReactNode
}
const SectionTag: React.FC<SectionTagTypes> = ({ className, size = 'small', children }) => {
  const classes = useMemo(
    () =>
      classNames(
        {
          [sectionTagConst.small]: size === 'small',
          [sectionTagConst.middle]: size === 'middle',
          [sectionTagConst.large]: size === 'large'
        }
      ),
    [size]
  )

  return (
    <div className={classNames(
      'w-full h-full border-1 border-solid border-pr_purple',
      className,
      classes
    )}
      data-tid="section-tag"
    >
      {children}
    </div>
  )
}

export default SectionTag
