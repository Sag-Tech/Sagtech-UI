import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input from './Input'

const onChange = jest.fn()

describe('Input component', () => {
  it('input component render', () => {
    const { getByRole } = render(<Input />)
    const inputElement = getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveClass('bg-black_1 border-[1px] border-solid  font-["Manrope"] font-medium leading-24 outline-none rounded-16px')
  })

  it('Input with active state', () => {
    const { getByRole, getByText } = render(<Input state='active' label='label'/>)
    const inputElement = getByRole('textbox')
    const labelElement = getByText('label')
    expect(inputElement).toBeInTheDocument()
    expect(labelElement).toBeInTheDocument()
    expect(inputElement).toHaveClass('pb-8px pt-23px px-24px text-white_4  placeholder:text-white_4 border-pr_purple')
    expect(labelElement).toHaveClass('text-10 absolute top-8px left-24px leading-16 font-medium text-grey_2 ')
  })

  it('Input with default state', () => {
    const { getByRole } = render(<Input state='default'/>)
    const inputElement = getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveClass('border-pr_purple py-16px px-24px placeholder:text-grey_4 text-grey_4')
  })

  it('Input with error state', () => {
    const { getByRole, getByText } = render(<Input isError errorMessage='Error'/>)
    const inputElement = getByRole('textbox')
    const errorElement = getByText('Error')
    expect(inputElement).toBeInTheDocument()
    expect(errorElement).toBeInTheDocument()
    expect(inputElement).toHaveClass('border-error py-16px px-24px text-grey_4')
    expect(errorElement).toHaveClass('px-24px pt-4px text-error font-medium text-12 leading-16')
  })

  it('Disabled Input', () => {
    const { getByRole } = render(<Input disabled={true}/>)
    const inputElement = getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveClass('disabled:border-grey_2 disabled:placeholder:text-grey_2')
  })

  it('onChange check', () => {
    const { getByRole } = render(<Input onChange={onChange}/>)
    const inputElement = getByRole('textbox')
    userEvent.type(inputElement, 'react')
    expect(onChange).toHaveBeenCalledTimes(5)
  })
})
