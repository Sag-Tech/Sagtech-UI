import React, { useState, type InputHTMLAttributes, type DetailedHTMLProps, useMemo } from 'react'
import '../../styles/globals.css'
import { Icon } from '../IconComponent/Icon'
import attachmentConsts from './AttachmentConsts/attachmentConsts'
import classNames from 'classnames'

interface AttachmentTypes extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  children?: React.ReactNode
  state?: 'active' | 'default' | 'error' | 'disabled'
  accept?: '.png, .jpg, .pdf, .gif'
}

const Attachment: React.FC<AttachmentTypes> = ({ state, accept, children, ...rest }) => {
  const [value, setValue] = useState('')
  const [hover, setHover] = useState(false)

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const fullPath: string = event.target.value
    const fileName = fullPath.substring(fullPath.lastIndexOf('\\') + 1)
    setValue(fileName)
  }

  const mouseHandlerOver = (): void => {
    setHover(true)
  }

  const mouseHandlerLeave = (): void => {
    setHover(false)
  }

  const nameStyles = classNames({
    [attachmentConsts.attacmentNameBasic]: true,
    [attachmentConsts.erroAndDefAttachName]: state === 'default' || state === 'error',
    [attachmentConsts.activeAttachmentName]: state === 'active' || (state === 'default' && hover),
    [attachmentConsts.disabledAttachName]: state === 'disabled'
  })

  const variantStyle = classNames({
    [attachmentConsts.attacmentVariantBasic]: true,
    [attachmentConsts.defaultAttachmentVariants]: true
  })

  const iconColors = useMemo(() => `
  ${hover && state === 'default' ? '#F8F8F8' : ''}
  ${state !== 'active' && state !== 'disabled' && !hover ? '#B5B5B9' : ''}
  ${state === 'active' ? '#F8F8F8' : ''}
  ${state === 'disabled' ? '#83838A' : ''}
  `, [state, hover])

  return (
     <label onMouseOver={state === 'default' ? mouseHandlerOver : undefined} onMouseLeave={state === 'default' ? mouseHandlerLeave : undefined} className='inline-flex items-center gap-12px pointer cursor-pointer'>
        <Icon icon='attach' color={iconColors} />
        <input onChange={inputHandler} className='hidden' accept={accept} {...rest} />
        <div>
          <p data-tid='attach-name' className={nameStyles}>{value.length > 0 ? value : 'Attach file'}</p>
          <p data-tid='attach-variant' className={variantStyle}><span data-tid='attach-variant-span'className={state === 'error' ? 'text-error' : ''}>(PDF, PNG, JPG, GIF;</span> max. 10mb)</p>
        </div>
     </label>
  )
}

export default Attachment
