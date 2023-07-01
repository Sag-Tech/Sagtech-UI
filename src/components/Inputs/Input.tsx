import React, { type InputHTMLAttributes, type DetailedHTMLProps } from 'react'
import '../../styles/globals.css'
import inputConsts from './InputsConsts/inputConsts'
import classNames from 'classnames'

interface InputTypes extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  value?: string
  state?: 'default' | 'active' | 'error'
  disabled?: boolean
  children?: React.ReactNode
  errorMessage?: string
}

const Input: React.FC<InputTypes> = ({ state, value, errorMessage, disabled, ...rest }) => {
  const inputStyles = classNames({
    [inputConsts.basicStyles]: true,
    [inputConsts.disabledInput]: true,
    [inputConsts.defaultBorder]: state === 'default',
    [inputConsts.defaultStyles]: state === 'default',
    [inputConsts.activeInput]: state === 'active',
    [inputConsts.errorInput]: state === 'error'
  })

  return (
      <>
        <div className='flex flex-col relative'>
         {state === 'active' && <span className='text-10 absolute top-8px left-24px leading-16 font-medium text-grey_2 '>Label</span>}
        <input className={inputStyles} disabled={disabled} placeholder={value} {...rest} />
        </div>
       {state === 'error' && <p className='px-24px pt-4px text-error text-12 font-medium leading-16'>{errorMessage}</p>}
      </>
  )
}

export default Input
