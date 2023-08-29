import type { Meta, StoryFn } from '@storybook/react'
import Pagination from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Pagination',
  component: Pagination
}

export default meta

const Template: StoryFn = (arg) => <Pagination {...arg}/>

export const PaginationDefault = Template.bind({})

PaginationDefault.args = {
  text: '1',
  type: 'button',
  state: 'default',
  disabled: false,
  arrowPosition: 'left'
}

const PaginationActive: StoryFn = (arg) => <Pagination {...arg}/>

export const PagActive = PaginationActive.bind({})

PagActive.args = {
  text: '1',
  type: 'button',
  state: 'active',
  disabled: false,
  arrowPosition: 'right'
}

const PaginationDisabled: StoryFn = (arg) => <Pagination {...arg}/>

export const PagDisabled = PaginationDisabled.bind({})

PagDisabled.args = {
  text: '1',
  type: 'button',
  disabled: true,
  state: 'disabled',
  arrowPosition: 'right'
}
