import { type StoryFn, type Meta } from '@storybook/react'
import Typography from './Typography'

export default {
  title: 'Typography',
  component: Typography
} satisfies Meta

const Template: StoryFn = (arg) => <Typography {...arg} />

export const Default = Template.bind({})
Default.args = {
  text: 'Example',
  tag: 'p'
}
