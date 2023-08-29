import type { StoryFn, Meta } from '@storybook/react'
import { Result } from './Result'

const meta: Meta<typeof Result> = {
  title: 'Result',
  component: Result
}
export default meta

const Template: StoryFn = (arg) => <Result {...arg} />

export const ResultComponent = Template.bind({})
ResultComponent.args = {
  title: '+27000',
  info: 'new exclusive users'
}
