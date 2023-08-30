import { fireEvent, render } from '@testing-library/react'

import AnimationButton from './AnimationButton'
import { type IIconProps } from '@components/Icon/Icon'

jest.mock('@components/IconComponent/Icon', () => ({
  Icon: (props: IIconProps) => <div data-tid="icon" {...props}/>
}))

describe('Animation component', () => {
  it('Button render', () => {
    const { getByRole, getByTestId } = render(<AnimationButton />)
    const buttonElement = getByRole('button')
    const iconElement = getByTestId('icon')
    expect(buttonElement).toBeInTheDocument()
    expect(iconElement).toBeInTheDocument()
  })

  it('Component check classes', () => {
    const { getByRole, getByText } = render(<AnimationButton text='Name of Button' />)
    const buttonElement = getByRole('button')
    const iconDivElement = getByRole('contentinfo')
    const spanElement = getByText(/Name of Button/i)
    expect(buttonElement).toBeInTheDocument()
    expect(iconDivElement).toBeInTheDocument()
    expect(spanElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('buttonAnim  bg-pr_purple  items-center rounded-circle buttonAnims overflow-hidden')
    expect(iconDivElement).toHaveClass('iconStyles')
    expect(spanElement).toHaveClass('text-white  whitespace-nowrap animation font-["Manrope"] font-bold leading-24')
  })

  it('Button onClick check', () => {
    const onClick = jest.fn()
    const { getByRole } = render(<AnimationButton onClick={onClick}/>)
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    fireEvent.click(buttonElement)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
