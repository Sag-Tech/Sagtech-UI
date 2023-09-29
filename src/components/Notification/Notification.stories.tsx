import type { Meta, StoryFn } from '@storybook/react'
import Notification from './Notification'

const meta: Meta<typeof Notification> = {
  title: 'Notification',
  component: Notification
}

export default meta

const NotificationDescktop: StoryFn = (arg) => <Notification {...arg}/>

export const NotificationDesctopSize = NotificationDescktop.bind({})

NotificationDesctopSize.args = {
  title: 'Thank you for submitting your project development request!',
  text: 'Your submission has been received and is now under review by our specialized team. Your vision is paramount to us, and we’re excited about the possibility of bringing it to life together. Stay tuned!',
  buttonTextSecond: 'Decline',
  buttonTextFirst: 'Accept',
  state: 'succes',
  size: 'desktop'
}

const NotificationMobile: StoryFn = (arg) => <Notification {...arg}/>

export const NotificationMobileSize = NotificationMobile.bind({})

NotificationMobileSize.args = {
  title: 'Thank you!',
  text: 'You have been successfully subscribed on our newsletter!',
  buttonTextSecond: 'Decline',
  buttonTextFirst: 'Accept',
  state: 'succes',
  size: 'mobile'
}
