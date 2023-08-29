import { Typography } from '../Typo/Typography'
import { type StoryFn, type Meta } from '@storybook/react'
import { SectionTag } from './SectionTag'

const meta: Meta<typeof SectionTag> = {
  title: 'SectionTag',
  component: SectionTag
}

export default meta

const Template: StoryFn = (arg) => <SectionTag {...arg} />

export const SmallSize = Template.bind({})
SmallSize.args = {
  size: 'small',
  children: <Typography text='Example' type='Labels' />
}

export const MiddleSize = Template.bind({})
MiddleSize.args = {
  size: 'middle',
  children: <Typography text='Example' type='Labels' />
}

export const LargeSize = Template.bind({})
LargeSize.args = {
  size: 'large',
  children: <Typography text='Example' type='Labels' />
}
