import React, { type TextareaHTMLAttributes, type DetailedHTMLProps } from 'react'
import '../../styles/globals.css'
import textareaConsts from './TextAreaConsts/textarea'
import classNames from 'classnames'

interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  state?: 'default' | 'active' | 'error'
  value?: string
  classes?: string
  disabled?: boolean
  errorMessage?: string
}

const TextArea: React.FC<TextAreaProps> = ({ state, value, classes, disabled, errorMessage, ...rest }) => {
  const textareaStyles = classNames({
    [textareaConsts.basicStyles]: true,
    [textareaConsts.defaultBorder]: state === 'default',
    [textareaConsts.defaultStyles]: state === 'default',
    [textareaConsts.disabledArea]: true,
    [textareaConsts.activeArea]: state === 'active',
    [textareaConsts.errorArea]: state === 'error'
  })
  return (
    <div>
        <textarea className={`${textareaStyles} ${classes !== undefined ? classes : ''}`} disabled={disabled} placeholder={value} {...rest}/>
        {state === 'error' && <p className='px-24px pt-4px text-error text-12 font-medium leading-16'>{errorMessage}</p>}
    </div>
  )
}

export default TextArea
