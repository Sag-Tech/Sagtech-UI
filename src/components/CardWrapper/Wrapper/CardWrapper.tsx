import classNames from 'classnames'
import React, { useMemo } from 'react'
import cardWrapperConst from './CardWrapperConst/CardWrapperConst'
import type { VariantTypoRounded, VariantTypoStoke } from './types'

interface CardWrapperTypes {
  className?: string
  children?: React.ReactNode
  rounded?: VariantTypoRounded
  stoke?: VariantTypoStoke
}

const CardWrapper: React.FC<CardWrapperTypes> = ({ className, children, rounded = '24', stoke = '2' }) => {
  const stoke1 = stoke === '1'
  const stoke2 = stoke === '2'
  const rounded24 = rounded === '24'
  const rounded40 = rounded === '40'
  const rounded16 = rounded === '16'
  const rounded12 = rounded === '12'

  const classes = useMemo(
    () => classNames({
      [cardWrapperConst.stoke1Border24]: stoke1 && rounded24,
      [cardWrapperConst.stoke2Border24]: stoke2 && rounded24,
      [cardWrapperConst.stoke1Border40]: stoke1 && rounded40,
      [cardWrapperConst.stoke2Border40]: stoke2 && rounded40,
      [cardWrapperConst.stoke2Border16]: stoke2 && rounded16,
      [cardWrapperConst.stoke2Border12]: stoke2 && rounded12
    }),
    [stoke1, stoke2, rounded24, rounded40, rounded16, rounded12]
  )

  return (
    <div
      className={classNames(
        'card_wrapper w-full justify-between',
        classes,
        className
      )}
      data-tid="card-wrapper"
    >
      {children}
    </div>
  )
}
export default CardWrapper
