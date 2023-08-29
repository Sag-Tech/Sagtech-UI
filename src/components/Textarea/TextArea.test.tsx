import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TextArea } from './TextArea'

const onChange = jest.fn()

describe('TextArea component', () => {
  it('TextArea render', () => {
    const { getByRole } = render(<TextArea />)
    const textAreaElement = getByRole('textbox')
    expect(textAreaElement).toBeInTheDocument()
    expect(textAreaElement).toHaveClass('bg-black_1 border-[1px] resize-none border-solid w-full leading-24 py-16px px-24px  font-medium leading-6 outline-none rounded-16px')
  })

  it('TextArea with active state', () => {
    const { getByRole } = render(<TextArea state='active'/>)
    const textAreaElement = getByRole('textbox')
    expect(textAreaElement).toBeInTheDocument()
    expect(textAreaElement).toHaveClass('text-white_4  shadow-5xl  placeholder:text-white_4 border-pr_purple')
  })

  it('TextArea with default state', () => {
    const { getByRole } = render(<TextArea state='default'/>)
    const textAreaElement = getByRole('textbox')
    expect(textAreaElement).toBeInTheDocument()
    expect(textAreaElement).toHaveClass('border-pr_purple placeholder:text-grey_4 text-grey_4')
  })

  it('TextArea with error state', () => {
    const { getByRole, getByText } = render(<TextArea isError errorMessage='Error'/>)
    const textAreaElement = getByRole('textbox')
    const errorElement = getByText('Error')
    expect(textAreaElement).toBeInTheDocument()
    expect(errorElement).toBeInTheDocument()
    expect(textAreaElement).toHaveClass('border-error text-grey_4')
    expect(errorElement).toHaveClass('px-24px pt-4px text-error text-12 font-medium leading-16')
  })

  it('TextArea disabled', () => {
    const { getByRole } = render(<TextArea disabled={true}/>)
    const textAreaElement = getByRole('textbox')
    expect(textAreaElement).toBeInTheDocument()
    expect(textAreaElement).toHaveClass('disabled:border-grey_2 disabled:placeholder:text-grey_2')
  })

  it('onChange check', () => {
    const { getByRole } = render(<TextArea onChange={onChange}/>)
    const textAreaElement = getByRole('textbox')
    userEvent.type(textAreaElement, 'react')
    expect(onChange).toHaveBeenCalledTimes(5)
  })
})
