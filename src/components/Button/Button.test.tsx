import { fireEvent, render } from '@testing-library/react'

import { Button } from './Button'
import { type IIconProps } from '@components/IconComponent/Icon'

jest.mock('@components/IconComponent/Icon', () => ({
  Icon: (props: IIconProps) => <div data-tid='icon' {...props}/>
}))

describe('Button component', () => {
  it('Button render', () => {
    const { getByRole, queryByTestId } = render(<Button useIcon={true} />)
    const buttonElement = getByRole('button')
    const iconElement = queryByTestId('icon')
    expect(buttonElement).toBeInTheDocument()
    expect(iconElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('leading-24 flex justify-center items-center gap-8px  font-bold rounded-[16px]')
  })

  it('Button primary', () => {
    const { getByRole } = render(<Button variant='primary' buttonSize='large'/>)
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('bg-pr_purple border-[1px] border-solid border-pr_purple transition-all text-white hover:border-[6px] hover:border-solid hover:border-black_1 hover:shadow-3xl hover:transition-all leading-24 flex justify-center items-center gap-8px font-bold rounded-[16px] disabled:bg-[#545259] disabled:text-grey_2 py-16px px-40px leading-24')
  })

  it('Button secondary', () => {
    const { getByRole } = render(<Button variant='secondary' buttonSize='large'/>)
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('border-[2px] border-solid border-white bg-none  text-white hover:drop-shadow-3xl')
  })

  it('Button tabButton default', () => {
    const { getByRole } = render(<Button variant='tabButton' stateOfButton='default'/>)
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('text-grey_4  border-[1px] border-solid border-grey_4 rounded-[50px] transition-all duration-800 hover:border-white_4 hover:text-white_4 hover:transition-all hover:duration-800')
  })

  it('Button tabButton active', () => {
    const { getByRole } = render(<Button variant='tabButton' stateOfButton='active'/>)
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('bg-pr_purple border-none text-white_4')
  })

  it('Button small size', () => {
    const { getByRole } = render(<Button buttonSize='small'/>)
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('py-4px px-16px text-14 rounded-[50px]')
  })

  it('Button disbled ', () => {
    const { getByRole } = render(<Button variant='primary' disabled={true}/>)
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('disabled:bg-[#545259] disabled:text-grey_2')
  })

  it('Button disbled secondary', () => {
    const { getByRole } = render(<Button variant='secondary' disabled={true}/>)
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('disabled:border-grey_2 disabled:text-grey_2')
  })

  it('Button disbled secondary', () => {
    const { getByRole } = render(<Button variant='tabButton' disabled={true}/>)
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('disabled:border-[1px] disabled:border-solid disabled:border-grey_2 disabled:bg-none disabled:text-grey_2')
  })

  it('Button loading', () => {
    const variant = 'primary'
    const { getByRole } = render(<Button variant={variant} loadingType={true}/>)
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    if (variant === 'primary') {
      expect(buttonElement).toHaveClass('bg-[#545259] text-grey_2')
    } else {
      expect(buttonElement).toHaveClass('border-[2px] border-solid border-grey_2 text-grey_2')
    }
  })

  it('Button onClick check', () => {
    const onClick = jest.fn()
    const { getByRole } = render(<Button onClick={onClick}/>)
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    fireEvent.click(buttonElement)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
