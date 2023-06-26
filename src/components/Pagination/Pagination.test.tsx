import { render, screen } from '@testing-library/react'

import Pagination from './Pagination'

test('check buttons', () => {
  render(<Pagination />)
  const linkElement = screen.getByRole('button')
  expect(linkElement).toBeInTheDocument()
})
