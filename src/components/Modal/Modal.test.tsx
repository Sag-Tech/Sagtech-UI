import { render } from '@testing-library/react'
import Modal from './Modal'
import userEvent from '@testing-library/user-event'

describe('Modal component', () => {
  it('Modal Render', () => {
    const { getByTestId } = render(<Modal isOpen={true} />)
    const modalElement = getByTestId('modal')
    expect(modalElement).toBeInTheDocument()
  })

  it('onClick check', () => {
    const onClick = jest.fn()
    const { getByRole } = render(<Modal isOpen={true} toggle={onClick}/>)
    const backdropElement = getByRole('button')
    expect(backdropElement).toBeInTheDocument()
    userEvent.click(backdropElement)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
