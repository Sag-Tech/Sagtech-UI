import React from 'react'
import '../../styles/globals.css'
import { Icon } from '@components/IconComponent/Icon'
import Button from '@components/Button/Button'
import notificationConsts from './NotificationConsts/notificationConsts'
import classNames from 'classnames'

interface NotificationTypes {
  title?: React.ReactNode
  text?: React.ReactNode
  buttonText?: string
  size?: 'desktop' | 'mobile'
  state?: 'success' | 'error'
}

const Notification: React.FC<NotificationTypes> = ({ title, text, size, buttonText, state }) => {
  const allStyles = classNames({
    [notificationConsts.basicStyles]: true,
    'w-[392px]': size === 'desktop',
    'w-[359px]': size === 'mobile'
  })

  return (
        <div className={allStyles}>
             <div className='mr-16px'>
              <Icon icon={state === 'error' ? 'error' : 'success'} color='#F8F8F8'/>
             </div>
            <div>
                <h3 className='text-16 text-white_4 font-semibold leading-24 pb-4px'>{title}</h3>
                <p className={notificationConsts.basicTextStyles}>{text}</p>
                <div className='flex mt-16px gap-8px'>
                    <Button buttonSize='small' variant='primary' useIcon text={buttonText} />
                    <Button buttonSize='small' variant='secondary' useIcon text={buttonText} />
                </div>
            </div>

        </div>
  )
}

export default Notification
