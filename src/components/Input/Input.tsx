import React, { type InputHTMLAttributes, type DetailedHTMLProps, useMemo } from 'react'
import '../../styles/globals.css'
import InputConsts from './InputConsts'
import classNames from 'classnames'

interface InputTypes extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  state?: 'default' | 'active'
  disabled?: boolean
  isError?: boolean
  errorMessage?: string
  label?: string
  classes?: string
  inputClasses?: string
}

const Input: React.FC<InputTypes> = ({
  state = 'default',
  label,
  errorMessage,
  classes,
  disabled,
  isError,
  inputClasses,
  ...rest
}) => {
  const inputStyles = useMemo(
    () => classNames({
      [InputConsts.basicStyles]: true,
      [InputConsts.disabledInput]: true,
      [InputConsts.defaultBorder]: state === 'default' && !isError,
      [InputConsts.defaultStyles]: state === 'default' && !isError,
      [InputConsts.activeInput]: state === 'active' && !isError,
      [InputConsts.errorInput]: isError
    }),
    [isError, state]
  )

  const spanDefault = 'relative flex flex-col'
  return (
    <>
      <div className={`${spanDefault} ${classes !== undefined ? classes : ''}`}>
        {state === 'active' && !isError && (
          <span className="absolute left-24px top-8px text-10 font-medium leading-16 text-grey_2 ">
            {label}
          </span>
        )}
        <input
          className={`${inputStyles} ${inputClasses !== undefined ? inputClasses : ''}`}
          disabled={disabled}
          {...rest}
        />
      </div>
      {isError && (
        <p className="px-24px pt-4px text-12 font-medium leading-16 text-error">
          {errorMessage}
        </p>
      )}
    </>
  )
}

export default Input
