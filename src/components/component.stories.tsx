import { type Meta, type StoryFn } from '@storybook/react'

import MyComponent from './component'

export default {
  title: 'MyComponent',
  component: MyComponent
} satisfies Meta

const Template: StoryFn = () => <MyComponent />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}
