import { render, screen } from '@testing-library/react'

import SelectComponent from './SelectComponent'

test('check select', () => {
  render(<SelectComponent />)
  const linkElement = screen.getByRole('select')
  expect(linkElement).toBeInTheDocument()
})
