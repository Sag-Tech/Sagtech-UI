import { render, screen } from '@testing-library/react'

import Modal from './Modal'

test('check Notification', () => {
  render(<Modal />)
  const modalElement = screen.getByRole('div')
  expect(modalElement).toBeInTheDocument()
})
