/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, type InputHTMLAttributes, type DetailedHTMLProps, useMemo } from 'react'
import '../../styles/globals.css'
import { Icon } from '../IconComponent/Icon'
import attachmentConsts from './AttachmentConsts/attachmentConsts'
import classNames from 'classnames'

interface AttachmentTypes extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  children?: React.ReactNode
  state?: 'active' | 'default' | 'disabled'
  accept?: '.png, .jpg, .pdf, .gif'
  isError?: boolean
  onUpload?: (files: File[] | null) => void
  multiple?: boolean
}

const Attachment: React.FC<AttachmentTypes> = ({
  state,
  accept,
  children,
  isError = false,
  onUpload,
  multiple = true,
  ...rest
}) => {
  const [hover, setHover] = useState(false)
  const [files, setFiles] = useState<File[] | null>(null)

  const mouseHandlerOver = (): void => {
    setHover(true)
  }

  const mouseHandlerLeave = (): void => {
    setHover(false)
  }

  const nameStyles = classNames({
    [attachmentConsts.attacmentNameBasic]: true,
    [attachmentConsts.erroAndDefAttachName]: state === 'default' || isError,
    [attachmentConsts.activeAttachmentName]:
      state === 'active' || (state === 'default' && hover),
    [attachmentConsts.disabledAttachName]: state === 'disabled'
  })

  const variantStyle = classNames({
    [attachmentConsts.attacmentVariantBasic]: true,
    [attachmentConsts.defaultAttachmentVariants]: true
  })

  const iconColors = useMemo(
    () => `
    ${hover && state === 'default' ? '#F8F8F8' : ''}
    ${state !== 'active' && state !== 'disabled' && !hover ? '#B5B5B9' : ''}
    ${state === 'active' ? '#F8F8F8' : ''}
    ${state === 'disabled' ? '#83838A' : ''}
    `,
    [state, hover]
  )

  const handleFileChange = (e: React.ChangeEvent) => {
    const input = e.target as HTMLInputElement

    if (input.files) {
      const filesArr = Array.from(input.files)

      if (onUpload) {
        onUpload(filesArr)
      }

      setFiles(filesArr)
    }
  }

  const fileName = useMemo(() => {
    if (files && files.length > 0) {
      const inf = files[files.length - 1]
      return inf.name
    }
    return null
  }, [files])

  return (
     <div
      onMouseOver={state === 'default' ? mouseHandlerOver : undefined}
      onMouseLeave={state === 'default' ? mouseHandlerLeave : undefined}
    >
      <label
        htmlFor="input-file"
        className="pointer inline-flex cursor-pointer items-center gap-12px"
      >
        <Icon icon="attach" size={24} color={iconColors} />
        <input
          id="input-file"
          onChange={(e) => { handleFileChange(e) }}
          multiple={multiple}
          className="hidden"
          accept={accept}
          {...rest}
        />
        <div>
          <p data-tid="attach-name" className={nameStyles}>
            {files && files.length > 0 ? fileName : 'Attach file'}
          </p>
          <p data-tid="attach-variant" className={variantStyle}>
            <span
              data-tid="attach-variant-span"
              className={isError ? 'text-error' : ''}
            >
              (PDF, PNG, JPG, GIF;
            </span>
            {' '}
            max. 10mb)
          </p>
        </div>
      </label>
    </div>
  )
}

export default Attachment
