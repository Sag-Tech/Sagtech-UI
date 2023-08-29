import { type StoryFn, type Meta } from '@storybook/react'
import { Typography } from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography
}

export default meta

const Template: StoryFn = (arg) => <Typography {...arg} />

export const Default = Template.bind({})
Default.args = {
  text: 'Example',
  tag: 'p'
}
