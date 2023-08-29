import React, { type TextareaHTMLAttributes, type DetailedHTMLProps, useMemo } from 'react'
import '../../styles/globals.css'
import textareaConsts from './TextAreaConsts/textarea'
import classNames from 'classnames'

interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  state?: 'default' | 'active'
  classes?: string
  disabled?: boolean
  errorMessage?: string
  isError?: boolean
}

const TextArea: React.FC<TextAreaProps> = ({ state, value, classes, isError, disabled, errorMessage, ...rest }) => {
  const textareaStyles = useMemo(
    () => classNames({
      [textareaConsts.basicStyles]: true,
      [textareaConsts.defaultBorder]: state === 'default' && !isError,
      [textareaConsts.defaultStyles]: state === 'default' && !isError,
      [textareaConsts.disabledArea]: true,
      [textareaConsts.activeArea]: state === 'active' && !isError,
      [textareaConsts.errorArea]: isError
    }),
    [isError, state]
  )

  return (
    <div>
      <textarea
        className={`${textareaStyles} ${classes !== undefined ? classes : ''}`}
        disabled={disabled}
        {...rest}
      />
      {isError && (
        <p className="px-24px pt-4px text-12 font-medium leading-16 text-error">
          {errorMessage}
        </p>
      )}
    </div>
  )
}

export default TextArea
