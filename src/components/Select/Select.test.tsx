import { render } from '@testing-library/react'
import SelectComponent from './SelectComponent'
import { type IIconProps } from '@components/IconComponent/Icon'

jest.mock('@components/IconComponent/Icon', () => ({
  Icon: (props: IIconProps) => <div data-tid="icon" {...props}/>
}))

describe('Select component', () => {
  it('Select render', () => {
    const { getByTestId } = render(<SelectComponent />)
    const selectElement = getByTestId('react-select')
    const iconElement = getByTestId('icon')
    expect(selectElement).toBeInTheDocument()
    expect(iconElement).toBeInTheDocument()
  })
})
