import React, { type MouseEventHandler } from 'react'
import '../../styles/globals.css'
import Icon from '../Icon/Icon'
import Button from '../Button/Button'
import notificationConsts from './NotificationConsts/notificationConsts'
import classNames from 'classnames'
import type { IAvailableIcons } from '../../assets/icons'

interface NotificationTypes {
  title?: string
  text?: string
  buttonTextFirst?: string
  buttonTextSecond?: string
  size?: 'desktop' | 'mobile'
  state?: IAvailableIcons
  isbuttonSecond?: boolean
  useIconButtonFirst?: boolean
  color?: string
  onClickButtonFirst?: MouseEventHandler
}

const Notification: React.FC<NotificationTypes> = ({
  title,
  text,
  size,
  buttonTextFirst,
  buttonTextSecond,
  state = 'succes',
  isbuttonSecond = false,
  useIconButtonFirst = true,
  color = '#F8F8F8',
  onClickButtonFirst
}) => {
  const allStyles = classNames({
    [notificationConsts.basicStyles]: true,
    'w-[392px]': size === 'desktop',
    'w-[359px]': size === 'mobile'
  })

  return (
    <div
      role="contentinfo"
      className={`${allStyles} pointer-events-auto h-[196px] w-[359px] sm:h-[172px] sm:w-[392px]`}
    >
      <div className="mr-16px">
        <Icon icon={state} color={color} />
      </div>
      <div>
        <h3 className="pb-4px font-semibold leading-24 text-white_4">
          {title}
        </h3>
        <p className={notificationConsts.basicTextStyles}>{text}</p>
        <div className="mt-16px flex gap-8px">
          <Button
            buttonSize="small"
            variant="primary"
            useIcon={useIconButtonFirst}
            text={buttonTextFirst}
            onClick={onClickButtonFirst}
          />
          {isbuttonSecond && (
            <Button
              buttonSize="small"
              variant="secondary"
              useIcon
              text={buttonTextSecond}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Notification
