import { type StoryFn, type Meta } from '@storybook/react'
import Point from './Point'

const meta: Meta<typeof Point> = {
  title: 'Point',
  component: Point
}

export default meta

const Template: StoryFn = (arg) => <Point {...arg} />

export const Dot1 = Template.bind({})
Dot1.args = {
  text: 'finTech',
  color: 'text-grey_4',
  type: 'Labels',
  children: <div className="w-[8px] h-[8px] bg-pr_purple rounded-circle"></div>
}

export const Icon = Template.bind({})
Icon.args = {
  text: '2 developers',
  color: 'text-grey_4',
  type: 'BodyL',
  children: <img width={15} height={13.5} src='/svg/icons/users.svg' alt='icon'/>
}
