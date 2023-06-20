import { render, screen } from '@testing-library/react'

import Button from './Button'

test('check buttons', () => {
  render(<Button />)
  const linkElement = screen.getByRole('button')
  expect(linkElement).toBeInTheDocument()
})
