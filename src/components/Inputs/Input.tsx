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
         {state === 'active' && <span className='text-[10px] absolute top-8px left-24px leading-4 font-medium text-grey_2 '>Label</span>}
        <input className={inputStyles} disabled={disabled} placeholder={value} {...rest} />
        </div>
       {state === 'error' && <p className='px-6 pt-1 text-error font-medium text-xs'>{errorMessage}</p>}
      </>
  )
}

export default Input
