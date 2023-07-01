import { render, screen } from '@testing-library/react'

import Input from './Input'

test('check inputs', () => {
  render(<Input className=''/>)
  const linkElement = screen.getByRole('input')
  expect(linkElement).toBeInTheDocument()
})
