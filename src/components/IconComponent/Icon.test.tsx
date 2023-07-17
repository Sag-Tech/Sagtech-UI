import { render } from '@testing-library/react'
import { type IIconProps } from './Icon'
import { Icon } from './Icon'

jest.mock('./Icon', () => ({
  Icon: (props: IIconProps) => <div data-tid='icon' {...props}/>
}))

describe('Icon component', () => {
  it('ss component render', () => {
    const { getByTestId } = render(<Icon icon='project' size={18} color='#fffff'/>)
    const iconElement = getByTestId('icon')
    expect(iconElement).toBeInTheDocument()
  })
})
