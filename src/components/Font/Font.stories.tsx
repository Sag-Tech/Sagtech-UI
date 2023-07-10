import { type StoryFn, type Meta } from '@storybook/react'
import Font from './Font'

export default {
  title: 'Font',
  component: Font
} satisfies Meta

const Template: StoryFn = (arg) => <Font {...arg} />

export const Default = Template.bind({})
Default.args = {
  text: 'Example',
  type: 'H1'
}
