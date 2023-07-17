import { render } from '@testing-library/react'
import Pagination from './Pagination'
import userEvent from '@testing-library/user-event'
import { type IIconProps } from '@components/IconComponent/Icon'

jest.mock('@components/IconComponent/Icon', () => ({
  Icon: (props: IIconProps) => <div data-tid="icon" {...props}/>
}))

describe('Pagination component', () => {
  it('Pagination render', () => {
    const { getByRole, getByTestId } = render(<Pagination />)
    const buttonElement = getByRole('button')
    const iconElement = getByTestId('icon')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('rounded-8px font-bold outline-none flex items-center border-[1px] border-solid leading-28 text-14 py-4px px-4px')
    expect(iconElement).toBeInTheDocument()
  })

  it('Pagination default classes', () => {
    const { getByRole } = render(<Pagination state='default'/>)
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('text-grey_4 border-grey_4')
    userEvent.hover(buttonElement)
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('text-white_4 border-white_4')
  })

  it('Pagination active classes', () => {
    const { getByRole } = render(<Pagination state='active' />)
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('bg-pr_purple border-none text-white')
  })

  it('Pagination disable classes', () => {
    const { getByRole } = render(<Pagination disabled={true} />)
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('disabled:text-grey_2 disabled:border-grey_2')
  })

  it('Pagination Icon check ArrowPositiom', () => {
    const { getByRole, getByTestId } = render(<Pagination arrowPosition='right' />)
    const buttonElement = getByRole('button')
    const iconElement = getByTestId('icon')
    expect(buttonElement).toBeInTheDocument()
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveClass('rotate-180')
  })

  it('Pagination onClick check', () => {
    const onClick = jest.fn()
    const { getByRole } = render(<Pagination onClick={onClick}/>)
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    userEvent.click(buttonElement)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
