import { useMemo } from 'react'
import classNames from 'classnames'
import buttonConst from '../ButtonConst/ButtonConst'
import { type ButtonTypes } from '../Button'

const useButtonStyles = ({
  variant,
  stateOfButton,
  disabled,
  loadingType,
  changeColor,
  buttonSize,
  hoverOff
}: ButtonTypes): string =>
  useMemo(
    () =>
      classNames({
        [buttonConst.tabButtonActive]:
          variant === 'tabButton' && stateOfButton === 'active' && !disabled,
        [buttonConst.tabButtonDefault]:
          variant === 'tabButton' && stateOfButton === 'default' && !disabled,
        [buttonConst.primaryButton]:
          variant === 'primary' && loadingType !== true,
        [buttonConst.primaryButtonTextColor]:
          variant === 'primary' && loadingType !== true && !changeColor,
        [buttonConst.primaryButtonNewColor]:
          variant === 'primary' && loadingType !== true && changeColor,
        [buttonConst.tabButtonBase]: variant === 'tabButton',
        [buttonConst.secondaryButton]:
          variant === 'secondary' && loadingType !== true,
        [buttonConst.hoverAnimation]:
          buttonSize === 'large' &&
          !(disabled ?? false) &&
          variant === 'primary' &&
          loadingType !== true &&
          !hoverOff,
        [buttonConst.secondaryAnimation]:
          variant === 'secondary' &&
          buttonSize === 'large' &&
          !(disabled ?? false) &&
          loadingType !== true,
        [buttonConst.tabButtonHover]:
          variant === 'tabButton' && stateOfButton !== 'active',
        [buttonConst.basicStyles]: variant !== 'tabButton',
        [buttonConst.primaryDisabledStyles]: variant === 'primary',
        [buttonConst.loadingPrimary]: variant === 'primary' && loadingType,
        [buttonConst.tabButtonDisabled]: variant === 'tabButton' && disabled,
        [buttonConst.secondaryDisabledStyles]:
          variant === 'secondary' && disabled,
        [buttonConst.loadingSecondary]: variant === 'secondary' && loadingType,
        [buttonConst.smallSize]: buttonSize === 'small',
        [buttonConst.largeSize]: buttonSize === 'large'
      }),
    [
      variant,
      stateOfButton,
      disabled,
      loadingType,
      changeColor,
      buttonSize,
      hoverOff
    ]
  )

export default useButtonStyles
