import type { Meta, StoryFn } from '@storybook/react'
import { Notification } from './Notification'

const meta: Meta<typeof Notification> = {
  title: 'Notification',
  component: Notification
}

export default meta

const NotificationDescktop: StoryFn = (arg) => <Notification {...arg}/>

export const NotificationDesctopSize = NotificationDescktop.bind({})

NotificationDesctopSize.args = {
  title: 'Thank you!',
  text: 'You have been successfully subscribed on our newsletter!',
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
