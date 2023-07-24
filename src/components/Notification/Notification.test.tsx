import { render } from '@testing-library/react'

import { Icon, type IIconProps } from '@components/IconComponent/Icon'
import Notification from './Notification'

jest.mock('@components/IconComponent/Icon', () => ({
  Icon: (props: IIconProps) => <div data-tid={`icon-${props.icon}`} {...props}/>
}))

describe('Notification component', () => {
  it('Notification render', () => {
    const { getByRole, getByText } = render(<Notification buttonTextFirst='Accept' buttonTextSecond='skip'/>)
    const notificationElement = getByRole('contentinfo')
    const firstButton = getByText(/Accept/i)
    const secondButton = getByText(/skip/i)
    expect(notificationElement).toBeInTheDocument()
    expect(firstButton).toBeInTheDocument()
    expect(secondButton).toBeInTheDocument()
    expect(notificationElement).toHaveClass('py-24px px-24px bg-black_1 inline-flex items-start rounded-24px border-[1px] border-solid border-black_3 shadow-4xl')
  })

  it('Notification text and title check', () => {
    const { getByText } = render(<Notification title='Name' text='some things'/>)
    const titleElement = getByText(/Name/i)
    const textElement = getByText(/some things/i)

    expect(titleElement).toBeInTheDocument()
    expect(textElement).toBeInTheDocument()
    expect(titleElement).toHaveClass('text-white_4 font-semibold leading-24 pb-4px')
    expect(textElement).toHaveClass('text-14 font-medium leading-24 text-grey_4')
  })

  it('Check state success and size', () => {
    const { getByTestId, getByRole } = render(<Notification state='success' size='desktop'>
        <Icon icon='success'/>
    </Notification>)
    const notificationElement = getByRole('contentinfo')
    expect(notificationElement).toHaveClass('w-[392px]')
    const iconElement = getByTestId('icon-success')
    expect(iconElement).toBeInTheDocument()
  })

  it('Check state error and size', () => {
    const { getByTestId, getByRole } = render(<Notification state='error' size='mobile'>
        <Icon icon='error'/>
    </Notification>)
    const notificationElement = getByRole('contentinfo')
    expect(notificationElement).toHaveClass('w-[359px]')
    const iconElement = getByTestId('icon-error')
    expect(iconElement).toBeInTheDocument()
  })
})
