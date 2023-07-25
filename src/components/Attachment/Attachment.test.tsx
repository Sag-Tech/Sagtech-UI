import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Attachment from './Attachment'
import { type IIconProps } from '@components/IconComponent/Icon'

jest.mock('@components/IconComponent/Icon', () => ({
  Icon: (props: IIconProps) => <div data-tid={`icon-${props.icon}`} {...props}/>
}))

describe('Attachment component', () => {
  it('Attachment render', () => {
    const { getByTestId } = render(<Attachment />)
    const nameElement = getByTestId('attach-name')
    const variantElement = getByTestId('attach-variant')
    const iconElement = getByTestId('icon-attach')
    expect(nameElement).toBeInTheDocument()
    expect(variantElement).toBeInTheDocument()
    expect(iconElement).toBeInTheDocument()
    expect(nameElement).toHaveClass('leading-24 font-semibold')
    expect(variantElement).toHaveClass('text-[10px] font-semibold leading-[18px]')
  })

  it('Attachment error state', () => {
    const { getByTestId } = render(<Attachment state='error' />)
    const nameElement = getByTestId('attach-name')
    const variantElement = getByTestId('attach-variant-span')
    expect(nameElement).toBeInTheDocument()
    expect(variantElement).toBeInTheDocument()
    expect(variantElement).toHaveClass('text-error')
    expect(nameElement).toHaveClass('text-grey_4')
  })

  it('Attachment default state', () => {
    const { getByTestId } = render(<Attachment state='default' />)
    const nameElement = getByTestId('attach-name')
    expect(nameElement).toBeInTheDocument()
    userEvent.hover(nameElement)
    expect(nameElement).toHaveClass('text-white_4')
  })

  it('onChange Check', () => {
    const onChange = jest.fn()
    const { getByRole } = render(<Attachment onChange={onChange} />)
    const inputElement = getByRole('textbox')
    userEvent.type(inputElement, 'test file')
    expect(onChange).toHaveBeenCalledTimes(9)
  })
})
