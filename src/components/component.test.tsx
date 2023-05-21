import { render, screen } from '@testing-library/react'
import Component from './component'

test('renders learn react link', () => {
  render(<Component />)
  const linkElement = screen.getByText(/hello, this is my test component!/i)
  expect(linkElement).toBeInTheDocument()
})
