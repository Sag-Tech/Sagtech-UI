import { type Meta, type StoryFn } from '@storybook/react'

import Pagination from './Pagination'

export default {
  title: 'Pagination',
  component: Pagination
} satisfies Meta

const Template: StoryFn = (arg) => <Pagination {...arg}/>

export const PaginationDefault = Template.bind({})

PaginationDefault.args = {
  children: '1',
  type: 'button',
  state: 'default',
  disabled: false,
  arrowPosition: 'left'
}

const PaginationActive: StoryFn = (arg) => <Pagination {...arg}/>

export const PagActive = PaginationActive.bind({})

PagActive.args = {
  children: '1',
  type: 'button',
  state: 'active',
  disabled: false,
  arrowPosition: 'right'
}

const PaginationDisabled: StoryFn = (arg) => <Pagination {...arg}/>

export const PagDisabled = PaginationDisabled.bind({})

PagDisabled.args = {
  children: '1',
  type: 'button',
  disabled: true,
  state: 'disabled',
  arrowPosition: 'right'
}
