import React, { type InputHTMLAttributes, type DetailedHTMLProps, useMemo } from 'react'
import '../../styles/globals.css'
import inputConsts from './InputsConsts/inputConsts'
import classNames from 'classnames'

interface InputTypes extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  state?: 'default' | 'active'
  disabled?: boolean
  children?: React.ReactNode
  errorMessage?: string
  label?: string
  classes?: string
  inputClasses?: string
  isError?: boolean
}

const Input: React.FC<InputTypes> = ({ state, value, label, isError, inputClasses, classes, errorMessage, disabled, ...rest }) => {
  const inputStyles = useMemo(() => classNames({
    [inputConsts.basicStyles]: true,
    [inputConsts.disabledInput]: true,
    [inputConsts.defaultBorder]: state === 'default' && !isError,
    [inputConsts.defaultStyles]: state === 'default' && !isError,
    [inputConsts.activeInput]: state === 'active' && !isError,
    [inputConsts.errorInput]: isError
  }), [isError, state])

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
