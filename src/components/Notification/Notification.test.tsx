import { render, screen } from '@testing-library/react'

import Notification from './Notification'

test('check Notification', () => {
  render(<Notification />)
  const notificationElement = screen.getByRole('alert')
  const titleElement = screen.getByRole('heading', { level: 3 })
  const textElement = screen.getByRole('paragraph')
  const buttons = screen.getAllByRole('button')

  expect(notificationElement).toBeInTheDocument()
  expect(titleElement).toBeInTheDocument()
  expect(textElement).toBeInTheDocument()
  expect(buttons.length).toBe(2)
})
