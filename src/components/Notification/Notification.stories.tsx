import { type Meta, type StoryFn } from '@storybook/react'
import Notification from './Notification'

export default {
  title: 'Notification',
  component: Notification
} satisfies Meta

const NotificationDescktop: StoryFn = (arg) => <Notification {...arg}/>

export const NotificationDesctopSize = NotificationDescktop.bind({})

NotificationDesctopSize.args = {
  title: 'Thank you!',
  text: 'You have been successfully subscribed on our newsletter! You can unsubscribe at any time.',
  buttonTextSecond: 'Decline',
  buttonTextFirst: 'Accept',
  state: 'success',
  size: 'desktop'
}

const NotificationMobile: StoryFn = (arg) => <Notification {...arg}/>

export const NotificationMobileSize = NotificationMobile.bind({})

NotificationMobileSize.args = {
  title: 'Thank you!',
  text: 'You have been successfully subscribed on our newsletter! You can unsubscribe at any time.',
  buttonTextSecond: 'Decline',
  buttonTextFirst: 'Accept',
  state: 'success',
  size: 'mobile'
}
